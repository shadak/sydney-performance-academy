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
      createdAt
      updatedAt
    }
  }
`;
export const deleteLessonGQL = /* GraphQL */ `
  mutation DeleteLessonGQL(
    $input: DeleteLessonInput!
    $condition: ModellessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      description
      userpools
      createdAt
      updatedAt
    }
  }
`;
