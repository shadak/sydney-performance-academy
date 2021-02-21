import { Lesson, LessonList } from '~/api/lesson';
import { CreateLessonMutation, DeleteLessonMutationVariables,  UpdateLessonMutationVariables } from './../../api/API';
import { LessonsState } from './context'

export interface LessonsReducer {
  (state: LessonsState, action: LessonsAction): LessonsState
}

export type LessonsAction = 
  | { type: 'CREATE', payload: Lesson}
  | { type: 'INIT', payload: Lesson[] }
  | { type: 'ERROR' }

const lessonsReducer: LessonsReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload]
    case 'INIT':
      console.log(action)
      return [...action.payload]
  }
  return [...state]
}

export default lessonsReducer