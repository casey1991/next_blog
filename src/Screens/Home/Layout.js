import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Header, Sidebar } from "./Components";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        {/* <Sidebar /> */}
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    display: "flex"
  }
});
export default withStyles(styles)(Layout);
