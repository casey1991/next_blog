import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Tabs,
  Tab
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Search as SearchIcon, Menu as MenuIcon } from "@material-ui/icons";
// actions
import { Actions } from "../../../Redux/Page/actions";

class Header extends Component {
  static propTypes = {
    active: PropTypes.number
  };
  static defaultProps = {
    active: 0
  };
  _renderNav = () => {
    const { classes, active } = this.props;
    return (
      <Tabs
        fullWidth
        centered
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabsIndicator
        }}
        value={active}
      >
        <Tab
          label="Design"
          classes={{
            root: classes.tabRoot
          }}
        />
        <Tab
          label="Develop"
          classes={{
            root: classes.tabRoot
          }}
        />
        <Tab
          label="Tools"
          classes={{
            root: classes.tabRoot
          }}
        />
      </Tabs>
    );
  };
  render() {
    const { classes, toggleSideBar } = this.props;
    const { active } = this.props;
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
            <Hidden smDown>
              <Typography variant="subtitle1" color="inherit" noWrap>
                MATERIAL DESIGN
              </Typography>
            </Hidden>
            <div className={classes.grow} />
            {/* except mobile navs */}
            <Hidden xsDown>{this._renderNav()}</Hidden>
            <IconButton color="inherit" classes={{ root: classes.searchRoot }}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
          {/* mobile navs */}
          <Hidden smUp>{this._renderNav()}</Hidden>
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
  // spacing
  grow: {
    flexGrow: 1
  },
  // search icon
  searchRoot: {
    marginLeft: theme.spacing.unit * 2,
    fontWeight: "normal",
    cursor: "pointer"
  },
  // tabs
  tabsRoot: {},
  tabsIndicator: {
    backgroundColor: theme.palette.common.white
  },
  tabRoot: {
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.pxToRem(16),
      minWidth: 100,
      minHeight: 64
    },
    "&:focus": {
      color: theme.palette.common.white,
      opacity: 1
    },
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1
    }
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
