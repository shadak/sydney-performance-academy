/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonGQL = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      title
      description
      userpools
      createdAt
      updatedAt
    }
  }
`;
export const listLessonsGQL = /* GraphQL */ `
  query ListLessons(
    $filter: ModellessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        userpools
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
