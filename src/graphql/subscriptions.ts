/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonGQL = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLessonGQL = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLessonGQL = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
export const onCreateSubmissionGQL = /* GraphQL */ `
  subscription OnCreateSubmission($owner: String) {
    onCreateSubmission(owner: $owner) {
      id
      owner
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubmissionGQL = /* GraphQL */ `
  subscription OnUpdateSubmission($owner: String) {
    onUpdateSubmission(owner: $owner) {
      id
      owner
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubmissionGQL = /* GraphQL */ `
  subscription OnDeleteSubmission($owner: String) {
    onDeleteSubmission(owner: $owner) {
      id
      owner
      lessonId
      createdAt
      updatedAt
    }
  }
`;
