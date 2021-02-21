import {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useReducer,
} from 'react'
import isFunction from 'lodash/isFunction'

export interface Thunk<A> {
  (dispatch: Dispatch<A>): void
}

export type ThunkDispatch<A> = (action: A | Thunk<A>) => void 

const useThunkReducer = <R extends Reducer<any, any>, A extends ReducerAction<R>>(
  reducer: R,
  initialState: ReducerState<R>
): [ReducerState<R>, ThunkDispatch<A>] => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const enhancedDispatch: ThunkDispatch<A> = (action) => {
    if (isFunction(action)) {
      action(dispatch)
    } else {
      dispatch(action)
    }
  }
  return [state, enhancedDispatch]
}

export default useThunkReducer
