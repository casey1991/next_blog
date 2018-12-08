import React, { Component } from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
class Main extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}
const styles = theme => ({
  root: {
    backgroundColor: "#333",
    height: 200,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 1280,
      margin: "0 auto"
    }
  }
});
export default compose(withStyles(styles))(Main);
