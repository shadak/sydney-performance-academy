import React, { createContext, Dispatch } from 'react'
import { AdminReducer, AdminAction, adminReducer } from './reducers'
import useThunkReducer, { Thunk, ThunkDispatch } from '~/hooks/useThunkReducer'
import { Lesson, LessonList } from '~/api/lesson'
import { Submission } from '~/api/submission'

export interface AdminState {
  lessonEditor: {
    enabled: boolean
    loading: boolean
    lesson: Lesson | undefined
  }
  submissionEditor: {
    enabled: boolean
    loading: boolean
    submission: Submission | undefined
  }
  lessons: LessonList
  submissions: {
    [submissionId: string]: undefined | Submission
  }
}

const initialState: AdminState = {
  lessonEditor: {
    enabled: false,
    loading: false,
    lesson: undefined,
  },
  submissionEditor: {
    enabled: false,
    loading: false,
    submission: undefined,
  },
  lessons: [],
  submissions: {},
}

export const AdminStateContext = createContext<AdminState>(initialState)
export const AdminDispatchContext = createContext(undefined)

const AdminProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useThunkReducer<AdminReducer, AdminAction>(
    adminReducer,
    initialState
  )

  return (
    <AdminStateContext.Provider value={state}>
      <AdminDispatchContext.Provider value={dispatch}>
        {children}
      </AdminDispatchContext.Provider>
    </AdminStateContext.Provider>
  )
}

export default AdminProvider
