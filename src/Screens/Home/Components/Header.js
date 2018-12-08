import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="subtitle1" color="inherit" noWrap>
              MATERIAL DESIGN
            </Typography>
            <div className={classes.grow} />
            <Typography
              variant="h6"
              color="inherit"
              classes={{ root: classes.navRoot }}
            >
              Design
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              classes={{ root: classes.navRoot }}
            >
              Develop
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              classes={{ root: classes.navRoot }}
            >
              Tools
            </Typography>
            <IconButton color="inherit" classes={{ root: classes.searchRoot }}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const styles = theme => ({
  root: {},
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  tabsRoot: {},
  tabRoot: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  navsRoot: {},
  navRoot: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    fontWeight: "normal",
    cursor: "pointer"
  },
  searchRoot: {
    marginLeft: theme.spacing.unit * 2,
    fontWeight: "normal",
    cursor: "pointer"
  }
});
export default withStyles(styles)(Header);