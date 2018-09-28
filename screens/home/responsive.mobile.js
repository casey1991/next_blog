import React, { Component } from "react";
import {
  Container,
  Button,
  Responsive,
  Visibility,
  Segment,
  Menu,
  Sidebar,
  Icon
} from "semantic-ui-react";
import Heading from "./heading";

export default class ResponsiveMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: false
    };
  }
  _toggleSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
  };
  render() {
    const { sidebarOpened } = this.state;
    const { children } = this.props;
    const { _toggleSidebar } = this;
    return (
      <Responsive minWidth={Responsive.onlyMobile.minWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            inverted
            visible={sidebarOpened}
            vertical
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={_toggleSidebar}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em,0em" }}
            >
              <Container>
                <Menu inverted pointing>
                  <Menu.Item onClick={_toggleSidebar}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <Heading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
