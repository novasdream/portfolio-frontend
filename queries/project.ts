import { gql } from '@apollo/client'

export const LIST_PROJECTS_QUERY = gql`
  query ListProjectsQuery {
    projects {
      data {
        attributes {
          title
          description
          link
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
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
