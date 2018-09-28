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

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
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
  render() {
    const { children } = this.props;
    const { fixed } = this.state;
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
                  <Menu.Item position="right">
                    {" "}
                    <Button as="a" inverted={!fixed}>
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
                  </Menu.Item>
                </Container>
              </Menu>
              <Heading />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      </div>
    );
  }
}
export default DesktopContainer;
