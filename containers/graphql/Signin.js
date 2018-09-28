import React, { Component } from "react";
import ggl from "graphql-tag";
import { Mutation } from "react-apollo";
import { Button, Checkbox, Form } from "semantic-ui-react";
const graphqlGGL = ggl`
    mutation createToken($email: String!,$password:String!) {
        createToken(email: $email,password:$password) {
            access_token
        }
    }
`;

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mutation mutation={graphqlGGL}>
        {(createToken, { data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              createToken({
                variables: { email: "email@email.com", password: "abc123" }
              });
            }}
          >
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
