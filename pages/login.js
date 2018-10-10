import React from "react";
import { withRouter } from "next/router";
import { compose, graphql } from "react-apollo";
import { MUTATION_CREATE_TOKEN } from "../graphql";
import { Layout, Signin } from "../screens/login";
import { persistToken, redirect } from "../lib/utils";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { createToken } = this.props;
    return (
      <Layout>
        <Signin
          onSubmit={values => {
            createToken({
              variables: values,
              update: (proxy, { data: { createToken } }) => {
                const { access_token } = createToken;
                persistToken(access_token);
                redirect({}, "/");
              }
            });
          }}
        />
      </Layout>
    );
  }
}

export default compose(
  graphql(MUTATION_CREATE_TOKEN, {
    name: "createToken"
  }),
  withRouter
)(Login);
