// import Link from "next/link";
import { Segment, Menu, Button, Container } from "semantic-ui-react";
const Header = () => (
  <Segment
    inverted
    textAlign="center"
    style={{ minHeight: 700, padding: "1em 0em" }}
    vertical
  >
    <Menu fixed="top" inverted pointing secondary size="large">
      <Container>
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" inverted>
            Log in
          </Button>
          <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </Segment>
);
export default Header;
