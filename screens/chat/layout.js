import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Layout extends Component {
  static propTypes = {
    renderGroups: PropTypes.func,
    renderRoom: PropTypes.func
  };
  static defaultProps = {
    renderGroups: () => {},
    renderRoom: () => {}
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { renderGroups, renderRoom } = this.props;
    console.log(this.props);
    return (
      <Container fluid>
        <Grid container>
          <Grid.Row>
            <Grid.Column width={4}>{renderGroups()}</Grid.Column>
            <Grid.Column width={12}>{renderRoom()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
