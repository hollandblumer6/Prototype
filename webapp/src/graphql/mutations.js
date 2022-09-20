/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSuggestion = /* GraphQL */ `
  mutation CreateSuggestion(
    $input: CreateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    createSuggestion(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateSuggestion = /* GraphQL */ `
  mutation UpdateSuggestion(
    $input: UpdateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    updateSuggestion(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuggestion = /* GraphQL */ `
  mutation DeleteSuggestion(
    $input: DeleteSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    deleteSuggestion(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      like
      owner
      createdAt
      updatedAt
    }
  }
`;
