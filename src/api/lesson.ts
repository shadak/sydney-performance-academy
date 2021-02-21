import { LessonsAction } from './../context/lessons/reducers'
import {
  graphql,
  extractResult,
  extractData,
} from './utils'
import { createLessonGQL } from './../graphql/mutations'
import {
  CreateLessonMutation,
  CreateLessonMutationVariables,
  GetLessonQuery,
  GetLessonQueryVariables,
  ListLessonsQuery,
} from './API'
import { getLessonGQL, listLessonsGQL } from './../graphql/queries'
import { Storage } from 'aws-amplify'
import { lessonStreamConfig } from '../aws-video-exports'
import config from '../aws-exports'
import { pipe } from 'ramda'
import { handleResult, Handler, handleGenericError, createThunk } from './utils'

export type Lesson = Exclude<GetLessonQuery['getLesson'], null>
export type LessonList = Exclude<
  Exclude<ListLessonsQuery['listLessons'], null>,
  null
>['items']

/**
 * CREATE LESSON
 */

const handleCreateLessonData: Handler<CreateLessonMutation, LessonsAction> = (
  result
) => ({
  type: 'CREATE',
  payload: result.createLesson as Lesson,
})

const handleCreateLessonResult = handleResult<
  CreateLessonMutation,
  LessonsAction
>(handleGenericError)(handleCreateLessonData)

const createLesson = (input: CreateLessonMutationVariables) =>
  graphql<CreateLessonMutationVariables, CreateLessonMutation>(createLessonGQL)(
    input
  )

export const createLessonThunk = createThunk<
  CreateLessonMutationVariables,
  CreateLessonMutation,
  LessonsAction
>(createLesson)(handleCreateLessonResult)

/**
 * GET LESSON
 * TODO: ThunkCreator
 */

const extractLesson = pipe(extractData, extractResult('getLesson'))
export const getLesson = pipe(
  graphql<GetLessonQueryVariables, CreateLessonMutation>(getLessonGQL),
  extractLesson
)

/**
 * LIST LESSONS
 */

const listLessons = () =>
  graphql<undefined, ListLessonsQuery>(listLessonsGQL)(undefined)
const handleListLessonsData: Handler<ListLessonsQuery, LessonsAction> = (
  result
) => ({
  type: 'INIT',
  payload: result.listLessons?.items as Lesson[],
})

const handleListLessonsResult = handleResult<ListLessonsQuery, LessonsAction>(
  handleGenericError
)(handleListLessonsData)

export const listLessonsThunk = createThunk<
  undefined,
  ListLessonsQuery,
  LessonsAction
>(listLessons)(handleListLessonsResult)(undefined)

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


