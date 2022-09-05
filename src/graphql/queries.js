import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
              node {
                ownerAvatarUrl
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
              }
            }
        }
    }
`

export const AUTHENTICATE = gql`
mutation Authenticate($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    user {
      id
      username
    }
    accessToken
  }
}
`
export const ME = gql `
{
  me {
    id
    username
  }
}
`