import React, { Component } from "react";
import ggl from "graphql-tag";
import { Mutation } from "react-apollo";
import cookie from "cookie";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
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
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={graphqlGGL}
        onCompleted={({ createToken }) => {
          const token = createToken.access_token;
          document.cookie = cookie.serialize("token", token, {
            maxAge: 30 * 24 * 60 * 60 // 30 days
          });
          console.log(cookie.parse(document.cookie).token);
        }}
      >
        {(createToken, { data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              createToken({
                variables: { email: email, password: password }
              });
            }}
          >
            <Form.Field>
              <label>Email</label>
              <Input
                placeholder="example@example.com"
                type="email"
                onChange={(e, { value }) => {
                  this.setState({ email: value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                placeholder="******"
                type="password"
                onChange={(e, { value }) => {
                  this.setState({ password: value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit" primary>
              Submit
            </Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
