import React, { Component } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { compose, graphql } from "react-apollo";
import { QUERY_CURRENT_USER, MUTATION_CREATE_TOKEN } from "../../../graphql";
import cookie from "cookie";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  render() {
    const { createToken } = this.props;
    const { email, password } = this.state;
    return (
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
    );
  }
}
export default compose(
  graphql(MUTATION_CREATE_TOKEN, {
    name: "createToken",
    options: {
      awaitRefetchQueries: true,
      refetchQueries: ["currentUser"],
      update: (proxy, { data: { createToken } }) => {
        document.cookie = cookie.serialize("token", createToken.access_token, {
          maxAge: 30 * 24 * 60 * 60 // 30 days
        });
      }
    }
  })
)(Signin);
