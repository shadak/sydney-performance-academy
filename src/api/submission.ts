import { getSubmissionGQL, listSubmissionsGQL } from './../graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';
import { submissionStreamConfig } from '../aws-video-exports';
import { CreateSubmissionInput, CreateSubmissionMutation, CreateSubmissionMutationVariables, GetSubmissionQuery, ListSubmissionsQuery, ListSubmissionsQueryVariables  } from './API'
import config from '../aws-exports'
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify'
import { v4 } from 'uuid';
import { createSubmissionGQL } from '~/graphql/mutations';

export type Submission = GetSubmissionQuery['getSubmission']

export type SubmissionInput = CreateSubmissionInput & {
  file: File
}

export interface GetS3SignedUrl {
  (id: string): Promise<String | Object>
}
export interface CreateSubmission {
  (input: SubmissionInput, progressCallback: (progress: any) => void) 
  : Promise <Submission | undefined>
}

export interface GetSubmissionById {
  (id: string): Promise<Submission | undefined>
}

export interface ListSubmissionsByLesson {
  (lessonId: string): Promise<Submission[] | null | undefined >
}

export interface ListSubmissionsByUser {
  (userId: string): Promise<Submission[] | undefined>
}

export interface ListSubmissions {
  (): Promise<Submission[] | null | undefined>
}

export const createSubmission: CreateSubmission = async (input, progressCallback) => {
  try {
    const { lessonId, file } = input
    const region = config.aws_project_region
    const { username } = await Auth.currentAuthenticatedUser()
     
    Storage.configure({
      AWSS3: {
        bucket: submissionStreamConfig.awsInputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
    const id = v4()
    const fileExtension = file.name.split('.')[1]
    const mutationVariables: CreateSubmissionMutationVariables = {
      input: {
        id,
        lessonId
      }
    }

    const result = (
      await API.graphql(graphqlOperation(createSubmissionGQL, mutationVariables ))
    ) as GraphQLResult<CreateSubmissionMutation> 

    let submission: Submission = null
    
    if (result.data) {
      submission = result.data.createSubmission
    }

    Storage.put(`${username}/${id}.${fileExtension}`, file, {
      progressCallback,
      contentType: 'video/*'
    })

    return submission

  } catch(error) {
    console.error(error)
  }
  return
}

export const getSubmissionById: GetSubmissionById = async (id) => {
  try {
    const result = (
      await API.graphql(graphqlOperation(getSubmissionGQL, { input: id }))
    ) as GraphQLResult<GetSubmissionQuery>
    if (result.data) {
      return result.data.getSubmission
    }
  } catch(error) {
    console.error(error)
  }
  return
}

export const listSubmissions: ListSubmissions = async () => {
  try {
    const result = (
      await API.graphql(graphqlOperation(listSubmissionsGQL))
    ) as GraphQLResult<ListSubmissionsQuery>

    return result.data?.listSubmissions?.items

  } catch(error) {
    console.error(error)
  }
  return
}
export const listSubmissionsByLesson: ListSubmissionsByLesson = async (lessonId) => {
  try {
    const queryVariables: ListSubmissionsQueryVariables = {
      filter: {
        lessonId: {
          eq: lessonId
        }
      }
    }
    const result = (
      await API.graphql(graphqlOperation(listSubmissionsGQL, queryVariables))
    ) as GraphQLResult<ListSubmissionsQuery>

    return result.data?.listSubmissions?.items

  } catch(error) {
    console.error(error)
  }
  return
}

export const getSubmissionVideo: GetS3SignedUrl = async (id) => {
  const { username } = await Auth.currentAuthenticatedUser()
  const region = config.aws_project_region
    Storage.configure({
      AWSS3: {
        bucket: submissionStreamConfig.awsOutputVideo,
        region,
        customPrefix: {
          public: '',
        },
      },
    })
    const path = `${username}/${id}/${id}.m3u8`
    console.log(path)
    const signedUrl = await Storage.get(path)
    console.log(signedUrl)
    return signedUrl
}