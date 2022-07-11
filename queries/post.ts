import { gql } from '@apollo/client'

export const LIST_FEATURED_POSTS_SUMMARY_QUERY = gql`
  query ListFeaturedPostsSummaryQuery {
    posts(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          title
          description
          date
          slug
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

export const LIST_POSTS_SUMMARY_QUERY = gql`
  query ListPostsSummaryQuery {
    posts {
      data {
        id
        attributes {
          title
          description
          date
          slug
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

export const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostBySlugQuery($slug: String!) {
    postDetail: posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          description
          date
          slug
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
