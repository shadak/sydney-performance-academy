import { Dispatch } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { curry, prop } from 'ramda'
import { Either, Just, Maybe, MaybeAsync } from 'purify-ts'
import { listLessonsGQL } from '~/graphql/queries'

export interface SPAGraphQLResult<T> extends GraphQLResult<T> {
  [index: string]: any
}
/*
export const graphql = <T, U extends object>(gql: string) => (variables: T) =>
  API.graphql(graphqlOperation(gql, variables)) as Promise<GraphQLResult<U>>
*/

export interface GraphQL {
  <T, U>(gql: string): (variables: T) => Promise<Maybe<GraphQLResult<U>>>
}

const extractProp = curry(prop)

export const extractData = (obj: SPAGraphQLResult<any>) =>
  extractProp('data')(obj)
export const extractResult = (queryName: string) => (obj: any) =>
  extractProp(queryName)(obj)
export const extractItems = (obj: any) => extractProp('items')(obj)

export type Get<T, U extends object> = (
  input: T
) => MaybeAsync<GraphQLResult<U>>

export interface Action {
  type: string
  payload: object | object[] | string
}
export interface CreateAction<T extends Object, U extends Action> {
  (result: T): U
}

export type GQLError = string

export interface CreateThunk {
  <T, U extends object, V extends Action>(get: Get<T, U>): {
    (errorCreator: CreateAction<GQLError, V>): {
      (actionCreator: CreateAction<U, V>): {
        (input: T): {
          (dispatch: Dispatch<V>): void
        }
      }
    }
  }
}

export const graphql = <T, U extends object>(gql: string) => (variables: T) =>
  MaybeAsync.fromPromise<GraphQLResult<U>>(async () => {
    const result = (await API.graphql(
      graphqlOperation(gql, variables)
    )) as GraphQLResult<U>
    return Maybe.of(result)
  })

/*
  const result = await API.graphql(graphqlOperation(gql, variables)) as GraphQLResult<U>
  return Maybe.of(result)
}
*/
export const createThunk = <T, U extends object, V extends Action>(
  get: Get<T, U>
) => (createError: CreateAction<GQLError, V>) => (
  createAction: CreateAction<U, V>
) => (input: T) => (dispatch: Dispatch<V>) =>
  get(input).then((result) =>
    result
      .map((result) => result.data)
      .toEither('GraphQL Error')
      .map((data) => data as U)
      .bimap(createError, createAction)
      .map(dispatch)
  )
