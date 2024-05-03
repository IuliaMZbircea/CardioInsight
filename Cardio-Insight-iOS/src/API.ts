/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePatientInput = {
  id?: string | null,
  name?: string | null,
  age?: number | null,
  gender?: string | null,
  diagnosedCVD: string,
  height?: number | null,
  weight?: number | null,
  smoker?: boolean | null,
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  diagnosedCVD?: ModelStringInput | null,
  height?: ModelIntInput | null,
  weight?: ModelFloatInput | null,
  smoker?: ModelBooleanInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  name?: string | null,
  age?: number | null,
  gender?: string | null,
  diagnosedCVD: string,
  height?: number | null,
  weight?: number | null,
  smoker?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePatientInput = {
  id: string,
  name?: string | null,
  age?: number | null,
  gender?: string | null,
  diagnosedCVD?: string | null,
  height?: number | null,
  weight?: number | null,
  smoker?: boolean | null,
};

export type DeletePatientInput = {
  id: string,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  diagnosedCVD?: ModelStringInput | null,
  height?: ModelIntInput | null,
  weight?: ModelFloatInput | null,
  smoker?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
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

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  diagnosedCVD?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionIntInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  smoker?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      name?: string | null,
      age?: number | null,
      gender?: string | null,
      diagnosedCVD: string,
      height?: number | null,
      weight?: number | null,
      smoker?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: string | null,
    diagnosedCVD: string,
    height?: number | null,
    weight?: number | null,
    smoker?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
