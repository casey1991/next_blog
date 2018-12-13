import React, { Component } from "react";
import { compose } from "redux";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { List } from "@material-ui/core";
class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
const styles = theme => ({});
export default compose(withStyles(styles))(Main);
