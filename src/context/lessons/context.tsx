import React, { createContext, useEffect } from 'react'
import { getLesson, LessonList, listLessonsThunk } from '~/api/lesson'
import useThunkReducer, { ThunkDispatch } from '~/hooks/useThunkReducer'
import lessonsReducer, { LessonsAction } from './reducers'

export type LessonsState = Exclude<LessonList, null>

const initialState: LessonsState = []

export const LessonsStateContext = createContext<LessonsState>(initialState)
export const LessonsDispatchContext = createContext<
  ThunkDispatch<LessonsAction> | undefined
>(undefined)

const LessonsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useThunkReducer(lessonsReducer, initialState)

  useEffect(() => {
    dispatch(listLessonsThunk)
  }, [])

  return (
    <LessonsStateContext.Provider value={state}>
      <LessonsDispatchContext.Provider value={dispatch}>
        {children}
      </LessonsDispatchContext.Provider>
    </LessonsStateContext.Provider>
  )
}

export default LessonsProvider
