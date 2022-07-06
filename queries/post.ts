import { gql } from '@apollo/client'

export const LIST_POSTS_QUERY = gql`
  query ListPostsQuery {
    posts {
      data {
        attributes {
          title
          content
          categories {
            data {
              attributes {
                name
                description
              }
            }
          }
        }
      }
    }
  }
`
