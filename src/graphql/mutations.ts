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
      submissions {
        nextToken
      }
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
      lessonId
      createdAt
      updatedAt
    }
  }
`;
