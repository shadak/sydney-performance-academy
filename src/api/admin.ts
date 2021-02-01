import { Auth, API } from "aws-amplify";

export type AddUserToGroup = (username: string, groupname: string) => Promise<void>
export type ListUsers = (groupname: string) => Promise<User[]>


interface AttributeTuple {
  name: string
  value: string
}

export type Attributes = [AttributeTuple, AttributeTuple, AttributeTuple, AttributeTuple, AttributeTuple]

export interface User {
  Attributes: Attributes
  Enabled: boolean
  UserCreateDate: string
  UserLastModifiedDate: string
  UserStatus: string
  Username: string
}

export const addUserToGroup: AddUserToGroup = async (username, groupname) => {
  const apiName = 'AdminQueries';
  const path = '/addUserToGroup';
  const mutation = {
    body: {
      "username" : username,
      "groupname": groupname
    }, 
    headers: {
      'Content-Type' : 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    } 
  }
  try {
    const response = await API.post(apiName, path, mutation)
    return response
  } catch (e) {
    console.error(e)
  }
}

export const listUsersInGroup: ListUsers = async (groupname) => {
  const apiName = 'AdminQueries';
  const path = '/listUsersInGroup';
  const query = { 
      queryStringParameters: {
        "groupname": groupname,
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  const { Users } = await API.get(apiName, path, query)
  return Users
}