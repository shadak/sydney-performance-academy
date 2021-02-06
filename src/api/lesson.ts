import { createLessonGQL } from './../graphql/mutations';
import { CreateLessonInput, CreateLessonMutation, CreateLessonMutationVariables, GetLessonQuery, GetLessonQueryVariables, ListLessonsQuery } from './API'
import { getLessonGQL, listLessonsGQL } from './../graphql/queries'
import { Storage, API, graphqlOperation } from "aws-amplify"
import { GraphQLResult } from "@aws-amplify/api"
import { lessonStreamConfig } from '../aws-video-exports'
import config from '../aws-exports'
import { v4 } from 'uuid'

export type Lesson = Exclude<GetLessonQuery['getLesson'], null>
export type LessonList = Exclude<ListLessonsQuery['listLessons'], null>['items']
export type LessonInput = CreateLessonInput & {
  file: File
}
export interface CreateLesson {
  (input: LessonInput, progressCallback: (progress: any) => void): Promise<Lesson | undefined>
}
export interface GetLesson {
  (id: string): Promise<Lesson | undefined>
}
export interface ListLessons {
  (): Promise<LessonList | undefined>
}

export interface GetS3SignedUrl {
  (id: string): Promise<String | Object>
}

export const createLesson: CreateLesson = async (input, progressCallback) => {
  try {
    const { title, description,  file } = input
    const region = config.aws_project_region
    Storage.configure({
      AWSS3: {
        bucket: lessonStreamConfig.awsInputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
    const id = v4()
    const fileExtension = file.name.split('.')[1]
    const mutationVariables: CreateLessonMutationVariables = {
        input: {
        id,
        title,
        description
      }
    }
    const result = ( 
      await API.graphql(graphqlOperation(createLessonGQL, mutationVariables))
    ) as GraphQLResult<CreateLessonMutation>

    Storage.put(`${id}.${fileExtension}`, file, {
      progressCallback,
      contentType: 'video/*'
    })
    if (result.data?.createLesson) {
      return result.data.createLesson
    }
  } catch(e) {
    console.error(e)
  }
  return
}

export const getLesson: GetLesson = async (id) => {
  try {
    const queryVariables: GetLessonQueryVariables = { id }
    const result = (
      await API.graphql(graphqlOperation(getLessonGQL, queryVariables)) 
    ) as GraphQLResult<GetLessonQuery>

    if (result.data?.getLesson){
      return result.data.getLesson
    }

  } catch(e) {
    console.error(e)
  }
  return
}

export const listLessons: ListLessons = async () => {
  try {
    const result = (
      await API.graphql(graphqlOperation(listLessonsGQL))
    ) as GraphQLResult<ListLessonsQuery>

    if (result.data?.listLessons?.items){
      return result.data.listLessons.items
    } 
  } catch(e) {
    console.error(e)
  }
  return
}

// TODO: Try catch block and handle error here.

export const getLessonThumbnail: GetS3SignedUrl = async (id: string) => {
  const region = config.aws_project_region
  Storage.configure({
    AWSS3: {
      bucket: lessonStreamConfig.awsOutputVideo,
      region,
      customPrefix: {
        public: '',
      },
    },
  })
  const signedUrl = await Storage.get(`${id}/${id}_thumbnail.0000000.jpg`)
  console.log(signedUrl)

  return signedUrl
}

export const getLessonVideo: GetS3SignedUrl = async (id) => {
  const region = config.aws_project_region
    Storage.configure({
      AWSS3: {
        bucket: lessonStreamConfig.awsOutputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
    const signedUrl = await Storage.get(`${id}/${id}.m3u8`)
    
    return signedUrl
}