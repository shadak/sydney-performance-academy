import { Submission } from '~/api/submission';
import { Lesson } from '~/api/lesson';
import { LessonList } from './../../api/lesson';
import { AdminState } from './context';

export type AdminAction = (
  | {type: 'ENABLE_LESSON_EDITOR'; payload: { lesson: Lesson }}
  | {type: 'ENABLE_SUBMISSION_EDITOR'; payload: { submission: Submission }}
  | {type: 'RETURN_DASHBOARD'}
  | {type: 'SET_LESSONS'; payload: { lessons: LessonList }}
)

export interface AdminReducer {
  (state: AdminState, action: AdminAction): AdminState
}

export const adminReducer: AdminReducer = (state, action) => {
  switch (action.type) {
    case 'ENABLE_LESSON_EDITOR':
      return ({
        ...state,
        lessonEditor: {
          enabled: true,
          loading: true,
          lesson: action.payload.lesson
        },
        submissionEditor: {
          enabled: false,
          loading: false,
          submission: state.submissionEditor.submission
        }
      })
    case 'ENABLE_SUBMISSION_EDITOR':
      return ({
        ...state,
        lessonEditor: {
          enabled: false,
          loading: false,
          lesson: state.lessonEditor.lesson
        },
        submissionEditor: {
          enabled: true,
          loading: true,
          submission: action.payload.submission
        }
      })
    case 'RETURN_DASHBOARD':
      return ({
        ...state,
        lessonEditor: {
          ...state.lessonEditor,
          enabled: false,
          loading: false,
        },
        submissionEditor: {
          ...state.submissionEditor,
          enabled: false,
          loading: false,
        }
      })
    case 'SET_LESSONS':
      if (action.payload.lessons) {
        return ({ 
          ...state,
          lessons: action.payload.lessons
        })  
      }
      return state
  }
}
