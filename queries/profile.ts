import { gql } from '@apollo/client'

export const GET_PROFILE_QUERY = gql`
  query GetProfileQuery {
    profile {
      data {
        attributes {
          email
          firstName
          lastName
          headline
          bio
          avatar {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
