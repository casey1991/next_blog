import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Header, Sidebar, Main } from "../../Components/Layouts/Basic";
class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Sidebar />
        <Main />
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
