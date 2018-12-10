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
  Tab,
  Avatar
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Assignment as AssignmentIcon
} from "@material-ui/icons";
import { lime } from "@material-ui/core/colors";
// actions
import { Actions } from "../../../Redux/Page/actions";

class Header extends Component {
  static propTypes = {
    active: PropTypes.number,
    onItemClick: PropTypes.func,
    hamburgerDisabled: PropTypes.bool
  };
  static defaultProps = {
    active: 0,
    onItemClick: () => {},
    hamburgerDisabled: false
  };
  _renderNav = ({ mobile }) => {
    const { classes, active, onItemClick } = this.props;
    return (
      <Tabs
        fullWidth
        centered
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabsIndicator
        }}
        value={active}
        scrollable={mobile ? true : false}
      >
        <Tab
          label="Home"
          classes={{
            root: classes.tabRoot
          }}
          disableRipple={mobile ? false : true}
          onClick={() => onItemClick("/")}
        />
        <Tab
          label="Design"
          classes={{
            root: classes.tabRoot
          }}
          disableRipple={mobile ? false : true}
          onClick={() => onItemClick("/design")}
        />
        <Tab
          label="Develop"
          classes={{
            root: classes.tabRoot
          }}
          disableRipple={mobile ? false : true}
          onClick={() => onItemClick("/develop")}
        />
        <Tab
          label="Tools"
          classes={{
            root: classes.tabRoot
          }}
          disableRipple={mobile ? false : true}
          onClick={() => onItemClick("/tools")}
        />
      </Tabs>
    );
  };
  render() {
    const { classes, toggleSideBar, hamburgerDisabled } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {hamburgerDisabled ? null : (
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
            )}
            <Avatar className={classes.greenAvatar} className={classes.logo}>
              <AssignmentIcon />
            </Avatar>
            <Hidden smDown>
              <Typography variant="subtitle1" color="inherit" noWrap>
                MATERIAL DESIGN
              </Typography>
            </Hidden>
            <div className={classes.grow} />
            {/* except mobile navs */}
            <Hidden xsDown>{this._renderNav({ mobile: false })}</Hidden>
            <IconButton color="inherit" classes={{ root: classes.searchRoot }}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
          {/* mobile navs */}
          <Hidden smUp>{this._renderNav({ mobile: true })}</Hidden>
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
  logo: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: lime[500]
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
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(14),
      minHeight: 48
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(16),
      minWidth: 72,
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
