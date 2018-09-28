// import Link from "next/link";
import { Menu, Button, Container } from "semantic-ui-react";
const Header = () => (
  <Menu fixed="top" inverted pointing size="large" inverted>
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
);
export default Header;
