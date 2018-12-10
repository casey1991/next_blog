import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Header";
import Main from "./Header";
class Layout extends Component {
  render() {
    const { classes } = this.props;
    const { children } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}
const styles = theme => ({
  root: {
    display: "flex"
  }
});
export default withStyles(styles)(Layout);
