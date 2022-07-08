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
          country
          state
          city
          address
          calendly
          linkedin
          google
          stackoverflow
          github
          avatar {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          resume {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
