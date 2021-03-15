import { GQLError } from './../../api/utils'
import { Lesson } from '~/api/lesson'
import { LessonsState } from './context'

export interface LessonsReducer {
  (state: LessonsState, action: LessonsAction): LessonsState
}

export type LessonsAction =
  | { type: 'CREATE'; payload: Lesson }
  | { type: 'INIT'; payload: Lesson[] }
  | { type: 'DELETE'; payload: Lesson }
  | { type: 'UPDATE'; payload: Lesson }
  | { type: 'ERROR'; payload: GQLError }

const replaceLesson = (input: Lesson) => (lesson: Lesson) =>
  input.id === lesson.id ? input : lesson
const sameId = (input: Lesson) => (lesson: Lesson) => input.id === lesson.id
const notSameId = (input: Lesson) => (lesson: Lesson) => !sameId(input)(lesson)

const lessonsReducer: LessonsReducer = (state, action) => {
  console.log({ action, state })
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload]
    case 'DELETE':
      return state.filter(notSameId(action.payload))
    case 'UPDATE':
      return state.map<Lesson>(replaceLesson(action.payload))
    case 'INIT':
      return [...action.payload]
    case 'ERROR':
      console.error(action.payload)
  }
  return [...state]
}

export default lessonsReducer
