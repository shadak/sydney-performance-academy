import { createLessonGQL } from './../graphql/mutations';
import { CreateLessonInput, CreateLessonMutation, GetLessonQuery, ListLessonsQuery } from './API'
import { getLessonGQL, listLessonsGQL } from './../graphql/queries'
import { Storage, API, graphqlOperation } from "aws-amplify"
import { GraphQLResult } from "@aws-amplify/api"
import videoConfig from '../aws-video-exports'
import config from '../aws-exports'
import { v4 } from 'uuid'

export interface Lesson {
   id?: string,
   title?: string,
   description?: string,
   createdAt?: string,
   updatedAt?: string,
}

export interface LessonInput extends CreateLessonInput {
  file: File
}

// Replace the 'any' here, may need to create my own type
type CreateLesson = (input: LessonInput, progressCallback: (progress: any) => void) => Promise<Lesson | undefined>
type GetLesson = (id: string) => Promise<Lesson | undefined>
type ListLessons = () => Promise<Lesson[] | undefined>

export const createLesson: CreateLesson = async (input, progressCallback) => {
  try {
    const { title, description,  file } = input
    const region = config.aws_project_region
    Storage.configure({
      AWSS3: {
        bucket: videoConfig.awsInputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
    const id = v4()
    const fileExtension = file.name.split('.')[1]
    const lessonInput = {
      id,
      title,
      description
    }
    const { data } = ( 
      await API.graphql(graphqlOperation(createLessonGQL, { input: lessonInput }))
    ) as GraphQLResult<CreateLessonMutation>
    const lesson = {
      id: data?.createLesson?.id, 
      title: data?.createLesson?.title, 
      description: data?.createLesson?.description
    }

    Storage.put(`${id}.${fileExtension}`, file, {
      progressCallback,
      contentType: 'video/*'
    })
    return lesson
  } catch(e) {
    console.error(e)
  }
  return
}

export const getLesson: GetLesson = async (id) => {
  try {
    const { data } = (
      await API.graphql(graphqlOperation(getLessonGQL, { input: id })) 
    ) as GraphQLResult<GetLessonQuery>
    return ({
      id: data?.getLesson?.id, 
      title: data?.getLesson?.title, 
      description: data?.getLesson?.description})
  } catch(e) {
    console.error(e)
  }
  return
}

export const listLessons: ListLessons = async () => {
  try {
    const { data } = (
      await API.graphql(graphqlOperation(listLessonsGQL))
    ) as GraphQLResult<ListLessonsQuery>

    const lessons = data?.listLessons?.items?.map((lesson): Lesson => ({
      id: lesson?.id,
      title: lesson?.title,
      description: lesson?.description
    }))
    return lessons
  } catch(e) {
    console.error(e)
  }
  return
}


/* TODO: Work out how to use a transform for different types
const transformData = (data: GetLessonQuery | CreateLessonInput): Lesson => {
  const key = Object.keys(data)[0]

  return ({
    id: data[key as keyof (GetLessonQuery | CreateLessonInput)].id,
    title: data.[key].title,
    description: data.[key].description
  })
}
*/