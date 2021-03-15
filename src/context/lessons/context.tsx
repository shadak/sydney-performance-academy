import React, { createContext, useEffect } from 'react'
import { initLessonsThunk, Lesson, LessonList } from '~/api/lesson'
import useThunkReducer, { ThunkDispatch } from '~/hooks/useThunkReducer'
import lessonsReducer, { LessonsAction } from './reducers'

export type LessonsState = Lesson[]

const initialState: LessonsState = []

export const LessonsStateContext = createContext<LessonsState>(initialState)
export const LessonsDispatchContext = createContext<
  ThunkDispatch<LessonsAction> | undefined
>(undefined)

const LessonsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useThunkReducer(lessonsReducer, initialState)

  useEffect(() => {
    dispatch(initLessonsThunk)
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
