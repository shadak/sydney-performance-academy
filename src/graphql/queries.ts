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
      submissions {
        nextToken
      }
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
export const getSubmissionGQL = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
      id
      owner
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const listSubmissionsGQL = /* GraphQL */ `
  query ListSubmissions(
    $filter: ModelsubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        lessonId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
