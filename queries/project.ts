import { gql } from '@apollo/client'

export const LIST_FEATURED_PROJECTS_SUMMARY_QUERY = gql`
  query ListFeaturedProjectsSummaryQuery {
    projects(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          title
          description
          slug
          link
          content
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

export const LIST_PROJECTS_SUMMARY_QUERY = gql`
  query ListProjectsSummaryQuery {
    projects {
      data {
        id
        attributes {
          title
          description
          slug
          link
          content
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

export const GET_PROJECT_BY_SLUG_QUERY = gql`
  query GetProjectBySlugQuery($slug: String!) {
    projectDetail: projects(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          description
          slug
          link
          content
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
