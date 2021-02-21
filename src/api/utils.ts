import { LessonsAction } from './../context/lessons/reducers';
import { Dispatch } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { curry, prop } from 'ramda'

export interface SPAGraphQLResult<T> extends GraphQLResult<T> {
  [index: string]: any
}

export const graphql = <T, U extends object>(gql: string) => (variables: T) =>
  API.graphql(graphqlOperation(gql, variables)) as Promise<GraphQLResult<U>>

const extractProp = curry(prop)

export const extractData = (obj: SPAGraphQLResult<any>) =>
  extractProp('data')(obj)
export const extractResult = (queryName: string) => (obj: any) =>
  extractProp(queryName)(obj)
export const extractItems = (obj: any) => extractProp('items')(obj)

export interface Handler<T,U> {
  (result: T): U
}

export interface ResultHandler {
  <T,U>(errorHandler: Handler<any[]|undefined,U>): {
    (dataHandler: Handler<T,U>): {
      (result: GraphQLResult<T>): U
    }
  }
}

export const handleResult: ResultHandler = (handleError) => (handleData) => (
  result
) => result.data ? handleData(result.data) : handleError(result.errors)

export const handleGenericError: Handler<any[] | undefined, LessonsAction> = (result) => ({
  type: 'ERROR'
})

export type Getter<T,U> = (input: T) => Promise<GraphQLResult<U>>

export interface ThunkCreator {
  <T,U,V>(getch: Getter<T,U>): {
    (handler: Handler<GraphQLResult<U>, V>): {
      (input: T): {
        (dispatch: Dispatch<V>): void
      }
    }
  }
}
export const createThunk: ThunkCreator = (get) => (handler) => (input) => (dispatch) => get(input).then(handler).then(dispatch)