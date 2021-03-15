import { GraphQLResult } from '@aws-amplify/api'
import { LessonsAction } from './../context/lessons/reducers'
import { graphql, CreateAction, GQLError } from './utils'
import {
  createLessonGQL,
  deleteLessonGQL,
  updateLessonGQL,
} from './../graphql/mutations'
import { getLessonGQL, listLessonsGQL } from './../graphql/queries'
import type {
  CreateLessonMutation,
  CreateLessonMutationVariables,
  DeleteLessonMutation,
  DeleteLessonMutationVariables,
  GetLessonQuery,
  GetLessonQueryVariables,
  ListLessonsQuery,
  UpdateLessonMutation,
  UpdateLessonMutationVariables,
} from './API'
import { Storage } from 'aws-amplify'
import { lessonStreamConfig } from '../aws-video-exports'
import config from '../aws-exports'
import { createThunk } from './utils'
import { Maybe } from 'purify-ts'

export type GraphQLPromise<T> = Promise<Maybe<GraphQLResult<T>>>
export type CreateLessonsAction<T> = CreateAction<T, LessonsAction>

export type Lesson = Exclude<GetLessonQuery['getLesson'], null>
export type LessonList = Exclude<
  Exclude<ListLessonsQuery['listLessons'], null>,
  null
>['items']

/**
 * CREATE LESSON
 */

const createLesson = (input: CreateLessonMutationVariables) =>
  graphql<CreateLessonMutationVariables, CreateLessonMutation>(createLessonGQL)(
    input
  )

const createCreateLessonAction: CreateAction<
  CreateLessonMutation,
  LessonsAction
> = (result) => ({
  type: 'CREATE',
  payload: result.createLesson as Lesson,
})

const createLessonFetchError: CreateLessonsAction<GQLError> = (error) => ({
  type: 'ERROR',
  payload: error,
})

export const createLessonThunk = createThunk<
  CreateLessonMutationVariables,
  CreateLessonMutation,
  LessonsAction
>(createLesson)(createLessonFetchError)(createCreateLessonAction)

/**
 * UPDATE LESSON
 */

const updateLesson = (input: UpdateLessonMutationVariables) =>
  graphql<UpdateLessonMutationVariables, UpdateLessonMutation>(updateLessonGQL)(
    input
  )

const createUpdateLessonAction: CreateLessonsAction<UpdateLessonMutation> = (
  result
) => ({
  type: 'UPDATE',
  payload: result.updateLesson as Lesson,
})

export const updateLessonThunk = createThunk<
  UpdateLessonMutationVariables,
  UpdateLessonMutation,
  LessonsAction
>(updateLesson)(createLessonFetchError)(createUpdateLessonAction)

/**
 * DELETE LESSON
 */

const deleteLesson = (input: DeleteLessonMutationVariables) =>
  graphql<DeleteLessonMutationVariables, DeleteLessonMutation>(deleteLessonGQL)(
    input
  )

const createDeleteLessonAction: CreateLessonsAction<DeleteLessonMutation> = (
  result
) => ({
  type: 'DELETE',
  payload: result.deleteLesson as Lesson,
})

export const deleteLessonThunk = createThunk<
  DeleteLessonMutationVariables,
  DeleteLessonMutation,
  LessonsAction
>(deleteLesson)(createLessonFetchError)(createDeleteLessonAction)

/**
 * GET LESSON
 */

const getLesson = (input: GetLessonQueryVariables) =>
  graphql<GetLessonQueryVariables, GetLessonQuery>(getLessonGQL)(input)

const createGetLessonAction: CreateLessonsAction<GetLessonQuery> = (
  result
) => ({
  type: 'UPDATE',
  payload: result.getLesson as Lesson,
})

export const getLessonThunk = createThunk<
  GetLessonQueryVariables,
  GetLessonQuery,
  LessonsAction
>(getLesson)(createLessonFetchError)(createGetLessonAction)

/**
 * INIT LESSONS
 */

const initLessons = () =>
  graphql<undefined, ListLessonsQuery>(listLessonsGQL)(undefined)
const createInitLessonsAction: CreateLessonsAction<ListLessonsQuery> = (
  result
) => ({
  type: 'INIT',
  payload: (result.listLessons?.items as Lesson[]) || [],
})
export const initLessonsThunk = createThunk<
  undefined,
  ListLessonsQuery,
  LessonsAction
>(initLessons)(createLessonFetchError)(createInitLessonsAction)(undefined)

/**
 * STORAGE
 */

interface StorageAction<T, U> {
  (input: T): U
}
interface StorageActionCreator {
  <T, U>(storageAction: StorageAction<T, U>): {
    (config: object): StorageAction<T, U>
  }
}

const createStorageAction: StorageActionCreator = (storageAction) => (
  config
) => (input) => {
  Storage.configure(config)
  return storageAction(input)
}

const createDownloadAction = createStorageAction(Storage.get)
const createLessonDownloadAction = createDownloadAction({
  AWSS3: {
    bucket: lessonStreamConfig.awsOutputVideo,
    region: config.aws_project_region,
    customPrefix: {
      public: '',
    },
  },
})
export const getLessonThumbnailURL = (id: string) =>
  createLessonDownloadAction(`${id}/${id}_thumbnail.0000000.jpg`)

export const getLessonVideoUrl = (id: string) =>
  createLessonDownloadAction(`${id}/${id}.m3u8`)
