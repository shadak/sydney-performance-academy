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

export type ModellessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userpools?: ModelStringInput | null,
  and?: Array< ModellessonFilterInput | null > | null,
  or?: Array< ModellessonFilterInput | null > | null,
  not?: ModellessonFilterInput | null,
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

export type OnCreateLessonSubscription = {
  onCreateLesson:  {
    __typename: "lesson",
    id: string,
    title: string,
    description: string,
    userpools: Array< string | null > | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
