/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  description: string,
  userpools?: Array< string | null > | null,
};

export type ModellessonConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModellessonConditionInput | null > | null,
  or?: Array< ModellessonConditionInput | null > | null,
  not?: ModellessonConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateLessonInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  userpools?: Array< string | null > | null,
};

export type DeleteLessonInput = {
  id?: string | null,
};

export type CreateSubmissionInput = {
  id?: string | null,
  owner?: string | null,
  lessonId: string,
};

export type ModelsubmissionConditionInput = {
  lessonId?: ModelIDInput | null,
  and?: Array< ModelsubmissionConditionInput | null > | null,
  or?: Array< ModelsubmissionConditionInput | null > | null,
  not?: ModelsubmissionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSubmissionInput = {
  id: string,
  owner?: string | null,
  lessonId?: string | null,
};

export type DeleteSubmissionInput = {
  id?: string | null,
};

export type CreateFeedbackInput = {
  id?: string | null,
  owner?: string | null,
  message: string,
  submissionId: string,
};

export type ModelfeedbackConditionInput = {
  message?: ModelStringInput | null,
  submissionId?: ModelIDInput | null,
  and?: Array< ModelfeedbackConditionInput | null > | null,
  or?: Array< ModelfeedbackConditionInput | null > | null,
  not?: ModelfeedbackConditionInput | null,
};

export type UpdateFeedbackInput = {
  id: string,
  owner?: string | null,
  message?: string | null,
  submissionId?: string | null,
};

export type DeleteFeedbackInput = {
  id?: string | null,
};

export type ModellessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userpools?: ModelStringInput | null,
  and?: Array< ModellessonFilterInput | null > | null,
  or?: Array< ModellessonFilterInput | null > | null,
  not?: ModellessonFilterInput | null,
};

export type ModelsubmissionFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  lessonId?: ModelIDInput | null,
  and?: Array< ModelsubmissionFilterInput | null > | null,
  or?: Array< ModelsubmissionFilterInput | null > | null,
  not?: ModelsubmissionFilterInput | null,
};

export type ModelfeedbackFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  message?: ModelStringInput | null,
  submissionId?: ModelIDInput | null,
  and?: Array< ModelfeedbackFilterInput | null > | null,
  or?: Array< ModelfeedbackFilterInput | null > | null,
  not?: ModelfeedbackFilterInput | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModellessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModellessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    submissions:  {
      __typename: "ModelsubmissionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModellessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    submissions:  {
      __typename: "ModelsubmissionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubmissionMutationVariables = {
  input: CreateSubmissionInput,
  condition?: ModelsubmissionConditionInput | null,
};

export type CreateSubmissionMutation = {
  createSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubmissionMutationVariables = {
  input: UpdateSubmissionInput,
  condition?: ModelsubmissionConditionInput | null,
};

export type UpdateSubmissionMutation = {
  updateSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubmissionMutationVariables = {
  input: DeleteSubmissionInput,
  condition?: ModelsubmissionConditionInput | null,
};

export type DeleteSubmissionMutation = {
  deleteSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
  condition?: ModelfeedbackConditionInput | null,
};

export type CreateFeedbackMutation = {
  createFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
  condition?: ModelfeedbackConditionInput | null,
};

export type UpdateFeedbackMutation = {
  updateFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
  condition?: ModelfeedbackConditionInput | null,
};

export type DeleteFeedbackMutation = {
  deleteFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModellessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons:  {
    __typename: "ModellessonConnection",
    items:  Array< {
      __typename: "lesson",
      id: string,
      title: string,
      description: string,
      userpools: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSubmissionQueryVariables = {
  id: string,
};

export type GetSubmissionQuery = {
  getSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubmissionsQueryVariables = {
  filter?: ModelsubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubmissionsQuery = {
  listSubmissions:  {
    __typename: "ModelsubmissionConnection",
    items:  Array< {
      __typename: "submission",
      id: string,
      owner: string | null,
      lessonId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelfeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks:  {
    __typename: "ModelfeedbackConnection",
    items:  Array< {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    submissions:  {
      __typename: "ModelsubmissionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    submissions:  {
      __typename: "ModelsubmissionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
    submissions:  {
      __typename: "ModelsubmissionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSubmissionSubscription = {
  onCreateSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSubmissionSubscription = {
  onUpdateSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSubmissionSubscription = {
  onDeleteSubmission:  {
    __typename: "submission",
    id: string,
    owner: string | null,
    feedback:  {
      __typename: "feedback",
      id: string,
      owner: string | null,
      message: string,
      submissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    lessonId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeedbackSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedbackSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedbackSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback:  {
    __typename: "feedback",
    id: string,
    owner: string | null,
    message: string,
    submissionId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
