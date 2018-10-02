import ggl from "graphql-tag";
export const MUTATION_CREATE_TOKEN = ggl`
  mutation createToken($email: String!, $password: String!) {
    createToken(email: $email, password: $password) {
      access_token
    }
  }
`;
export const QUERY_CURRENT_USER = ggl`
  {
    currentUser{
        id
        name
      }
  }
`;
export const GOODSS = ggl`
  {
    goodss{
      id
      name
    }
  }
`;
