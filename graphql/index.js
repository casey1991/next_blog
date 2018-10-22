import ggl from "graphql-tag";
export const SUBSCRIPTION_MESSAGE_CREATED = ggl`
  subscription onMessageCreated($roomId:String!){
    messageCreated(roomId:$roomId){
      id
      text
      user{
        id
        name
      }
      status
    }
  }
`;
export const MUTATION_CREATE_TOKEN = ggl`
  mutation createToken($email: String!, $password: String!) {
    createToken(email: $email, password: $password) {
      access_token
    }
  }
`;
export const MUTATION_CREATE_MESSAGE = ggl`
  mutation createMessage($roomId:String!,$text:String,$type:Int!){
    createMessage(roomId:$roomId,text:$text,type:$type){
      id
      text
      user{
        id
        name
      }
      status
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
export const QUERY_ROOMS = ggl`
  {
    rooms{
      id
      name
    }
  }
`;
export const QUERY_MESSAGES = ggl`
  query messages($roomId:String!){
    messages(roomId:$roomId){
      id
      text
      user{
        id
        name
      }
      status
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
