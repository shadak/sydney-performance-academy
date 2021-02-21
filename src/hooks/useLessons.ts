import { LessonsAction } from './../context/lessons/reducers';
import { ThunkDispatch } from './useThunkReducer';
import { LessonsStateContext, LessonsDispatchContext, LessonsState } from './../context/lessons/context';
import { useContext } from 'react';
import { curry } from 'ramda';


interface UseLessons {
  (): [LessonsState, ThunkDispatch<LessonsAction>]
}

const useLessons: UseLessons = () => {
  const state = useContext(LessonsStateContext)
  const dispatch = useContext(LessonsDispatchContext) as ThunkDispatch<LessonsAction>

  return [state, dispatch]
}

export default useLessons