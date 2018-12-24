import React, { Component } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
// material ui libs
import { withStyles } from "@material-ui/core";
class Main extends Component {
  render() {
    const { classes, children, style } = this.props;
    return (
      <div className={classes.root} style={style}>
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    width: "100%"
  },
  content: {
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 1280,
      margin: "0 auto",
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  }
});
export default compose(withStyles(styles))(Main);
