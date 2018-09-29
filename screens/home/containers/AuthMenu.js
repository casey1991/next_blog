import React, { Component } from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import ggl from "graphql-tag";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { upperCase } from "lodash";
export const QUERY_USER_PROFILE = ggl`
  {
      user{
        id
        name
      }
  }
`;
export default class AuthMenu extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    onSigninClicked: PropTypes.func
  };
  static defaultProps = {
    fixed: false,
    onSigninClicked: () => {}
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { fixed, onSigninClicked } = this.props;
    return (
      <Query query={QUERY_USER_PROFILE} pollInterval={1000}>
        {({ loading, error, data: { user } }) => {
          return (
            <Menu.Item position="right">
              {user ? (
                <div>
                  <Image
                    src="/static/img/home_bg.jpg"
                    avatar
                    style={{ marginLeft: "0.5em" }}
                  />
                  {upperCase(user.name)}
                </div>
              ) : (
                <div>
                  <Button as="a" inverted={!fixed} onClick={onSigninClicked}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    primary={fixed}
                    inverted={!fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </Menu.Item>
          );
        }}
      </Query>
    );
  }
}
