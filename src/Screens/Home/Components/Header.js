import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Search as SearchIcon, Menu as MenuIcon } from "@material-ui/icons";
// actions
import { Actions } from "../../../Redux/Page/actions";

class Header extends Component {
  render() {
    const { classes, toggleSideBar } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.menu}
                onClick={() => toggleSideBar()}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

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
  menu: {
    marginRight: theme.spacing.unit * 2
  },
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
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleSideBar: Actions.toggleSidebar
    },
    dispatch
  );
};
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
