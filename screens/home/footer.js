import { Container, Header, Segment, Grid, List } from "semantic-ui-react";
import React from "react";
const Footer = () => (
  <Segment inverted inverted style={{ padding: "5em,0em" }}>
    <Container>
      <Grid divided inverted>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" inverted>
              About
            </Header>
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" inverted>
              Services
            </Header>
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Sitemap</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default Footer;
