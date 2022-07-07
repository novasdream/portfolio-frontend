import { gql } from '@apollo/client'

export const HOME_PAGE_QUERY = gql`
  query HomePageQuery {
    homePage {
      data {
        attributes {
          heroContent
        }
      }
    }
  }
`
