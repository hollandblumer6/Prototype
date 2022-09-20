/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
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
export const listSuggestions = /* GraphQL */ `
  query ListSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        filePath
        like
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
