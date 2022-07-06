import { gql } from '@apollo/client'

export const LIST_WORK_EXPERIENCES_QUERY = gql`
  query ListWorkExperiencesQuery {
    workExperiences {
      data {
        attributes {
          title
          company
          description
          startDate
          endDate
          currentlyWorking
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
