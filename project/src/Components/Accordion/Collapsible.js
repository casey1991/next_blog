import React, { Component } from "react";
import { compose } from "redux";
import { map } from "lodash";
import PropTypes from "prop-types";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
class Collapsible extends Component {
  static propTypes = {
    open: PropTypes.bool
  };
  static defaultProps = {
    open: false
  };
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }
  render() {
    const { children } = this.props;
    const { open } = this.state;
    return <Collapse in={open}>{children}</Collapse>;
  }
}

const styles = theme => ({});
export default compose(withStyles(styles))(Collapsible);
