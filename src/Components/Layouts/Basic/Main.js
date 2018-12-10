import React, { Component } from "react";
import { compose } from "redux";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Paper, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { List, ListSubheader, ListItem, ListItemText } from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Grid container alignItems="center" spacing={24}>
            <Grid item md={8} sm={12}>
              <Typography variant="h3" gutterBottom>
                Design
              </Typography>
              <Typography variant="body1" gutterBottom>
                Create intuitive and beautiful products with Material Design.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12}>
              <List subheader={<Typography gutterBottom>POPULAR</Typography>}>
                <Typography variant="subtitle1" gutterBottom>
                  Tools for picking colors
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Iconography
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Text fields
                </Typography>
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.common.white
  },
  content: {
    width: "100%",
    paddingTop: theme.spacing.unit * 15,
    paddingBottom: theme.spacing.unit * 6,
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
