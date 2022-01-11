import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        name
        id
        location {
          name
          id
        }
        image
        origin {
          name
          id
        }
        episode {
          id
          episode
          air_date
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      image
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;
