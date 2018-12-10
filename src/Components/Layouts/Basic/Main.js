import React, { Component } from "react";
import { compose } from "redux";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Paper, Typography } from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h3">Design</Typography>
        </div>
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
    paddingTop: theme.spacing.unit * 15,
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
  },
  toolbar: theme.mixins.toolbar
});
export default compose(withStyles(styles))(Main);
