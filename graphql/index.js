import ggl from "graphql-tag";
export const CREATE_TOKEN = ggl`
  mutation createToken($email: String!, $password: String!) {
    createToken(email: $email, password: $password) {
      access_token
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
