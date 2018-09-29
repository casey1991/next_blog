import React, { Component } from "react";
import {
  Container,
  Button,
  Responsive,
  Visibility,
  Segment,
  Menu
} from "semantic-ui-react";
import Heading from "./heading";
import SigninModal from "./signin.modal";
import AuthMenu from "./containers/AuthMenu";

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      signinModalVisible: false
    };
  }
  _showFixedMenu = () => {
    this.setState({
      fixed: true
    });
  };
  _hideFixedMenu = () => {
    this.setState({
      fixed: false
    });
  };
  _toggleSignin = () => {
    this.setState({
      signinModalVisible: !this.state.signinModalVisible
    });
  };
  render() {
    const { children } = this.props;
    const { fixed, signinModalVisible } = this.state;
    const { _toggleSignin } = this;
    return (
      <div>
        <Responsive minWidth={700} fireOnMount>
          <Visibility
            once={false}
            onBottomPassed={this._showFixedMenu}
            onBottomPassedReverse={this._hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                size="large"
                inverted={!fixed}
                secondary={!fixed}
                pointing={!fixed}
              >
                <Container>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item as="a">Work</Menu.Item>
                  <Menu.Item as="a">Company</Menu.Item>
                  <Menu.Item as="a">Careers</Menu.Item>
                  <AuthMenu fixed={fixed} onSigninClicked={_toggleSignin} />
                </Container>
              </Menu>
              <Heading />
              <SigninModal open={signinModalVisible} onClose={_toggleSignin} />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      </div>
    );
  }
}
export default DesktopContainer;
