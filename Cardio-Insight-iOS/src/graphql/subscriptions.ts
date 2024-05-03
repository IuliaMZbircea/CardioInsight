/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePatient = /* GraphQL */ `subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
  onCreatePatient(filter: $filter) {
    id
    name
    age
    gender
    diagnosedCVD
    height
    weight
    smoker
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePatientSubscriptionVariables,
  APITypes.OnCreatePatientSubscription
>;
export const onUpdatePatient = /* GraphQL */ `subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
  onUpdatePatient(filter: $filter) {
    id
    name
    age
    gender
    diagnosedCVD
    height
    weight
    smoker
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePatientSubscriptionVariables,
  APITypes.OnUpdatePatientSubscription
>;
export const onDeletePatient = /* GraphQL */ `subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
  onDeletePatient(filter: $filter) {
    id
    name
    age
    gender
    diagnosedCVD
    height
    weight
    smoker
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePatientSubscriptionVariables,
  APITypes.OnDeletePatientSubscription
>;
