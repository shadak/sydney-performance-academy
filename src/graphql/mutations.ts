/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLessonGQL = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModellessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      description
      userpools
      createdAt
      updatedAt
    }
  }
`;
export const updateLessonGQL = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModellessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLessonGQL = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModellessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createSubmissionGQL = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelsubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
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
export const updateSubmissionGQL = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelsubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
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
export const deleteSubmissionGQL = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelsubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
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
export const createFeedbackGQL = /* GraphQL */ `
  mutation CreateFeedback(
    $input: CreateFeedbackInput!
    $condition: ModelfeedbackConditionInput
  ) {
    createFeedback(input: $input, condition: $condition) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
export const updateFeedbackGQL = /* GraphQL */ `
  mutation UpdateFeedback(
    $input: UpdateFeedbackInput!
    $condition: ModelfeedbackConditionInput
  ) {
    updateFeedback(input: $input, condition: $condition) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeedbackGQL = /* GraphQL */ `
  mutation DeleteFeedback(
    $input: DeleteFeedbackInput!
    $condition: ModelfeedbackConditionInput
  ) {
    deleteFeedback(input: $input, condition: $condition) {
      id
      owner
      message
      submissionId
      createdAt
      updatedAt
    }
  }
`;
