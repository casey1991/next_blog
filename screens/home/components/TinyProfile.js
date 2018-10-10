import React, { Component } from "react";
import { withRouter } from "next/router";
import { Menu, Button, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import { upperCase } from "lodash";
import { compose, graphql } from "react-apollo";
import { QUERY_CURRENT_USER } from "../../../graphql";
class TinyProfile extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    onClick: PropTypes.func,
    user: PropTypes.object
  };
  static defaultProps = {
    fixed: false,
    onClick: () => {},
    user: null
  };
  constructor(props) {
    super(props);
  }
  _jumpLogin = () => {
    const { router } = this.props;
    router.push("/login");
  };
  render() {
    const { fixed, user } = this.props;
    const { _jumpLogin } = this;
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
            <Button as="a" inverted={!fixed} onClick={_jumpLogin}>
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
  }
}

export default compose(
  graphql(QUERY_CURRENT_USER, {
    props: ({ data }) => {
      return {
        user: data.currentUser
      };
    },
    options: {
      fetchPolicy: "network-only"
    }
  }),
  withRouter
)(TinyProfile);
