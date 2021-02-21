/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonGQLGQL = /* GraphQL */ `
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
export const onUpdateLessonGQLGQL = /* GraphQL */ `
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
export const onDeleteLessonGQLGQL = /* GraphQL */ `
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
      feedback {
        id
        owner
        message
        submissionId
        createdAt
        updatedAt
      }
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
      feedback {
        id
        owner
        message
        submissionId
        createdAt
        updatedAt
      }
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
      feedback {
        id
        owner
        message
        submissionId
        createdAt
        updatedAt
      }
      lessonId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFeedbackGQL = /* GraphQL */ `
  subscription OnCreateFeedback($owner: String) {
    onCreateFeedback(owner: $owner) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFeedbackGQL = /* GraphQL */ `
  subscription OnUpdateFeedback($owner: String) {
    onUpdateFeedback(owner: $owner) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFeedbackGQL = /* GraphQL */ `
  subscription OnDeleteFeedback($owner: String) {
    onDeleteFeedback(owner: $owner) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
