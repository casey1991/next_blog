import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "next/router";
// material ui libs
import { withStyles, withTheme } from "@material-ui/core";
import { Drawer, Divider, Typography, Collapse } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon
} from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
// components
import Accordion from "../../Accordion";
// libs
import { toRenderProps } from "recompose";
// actions
import { Actions } from "../../../Redux/Page/actions";
const WithWidth = toRenderProps(withWidth());
const drawerWidth = 280;
class Sidebar extends Component {
  _calculateItemLeftPadding = level => {
    const { theme } = this.props;
    let innerLevel = 1;
    switch (level) {
      case 1:
        innerLevel = 3;
        break;
      case 2:
        innerLevel = 3;
        break;
      case 3:
        innerLevel = 3;
        break;
      default:
        innerLevel = level;
        break;
    }
    const result = theme.spacing.unit * 3 * (innerLevel - 3 + 1);
    return result;
  };
  _renderDivider = () => {
    const { theme } = this.props;
    return (
      <Divider
        style={{
          marginTop: theme.spacing.unit * 3,
          marginBottom: theme.spacing.unit * 3
        }}
      />
    );
  };
  _renderItemText = (item, header) => {
    if (header) return <ListItemText primary={item.title} />;
    return <ListItemText secondary={item.title} />;
  };
  _returnItem = (item, { toggle, level }) => {
    const { router } = this.props;
    if (item.type === "none") return null;
    if (item.type === "divider") return this._renderDivider();
    return (
      <ListItem
        button={item.type !== "header"}
        key={item.title}
        onClick={() => {
          toggle();
          if (item.path) {
            router.push(item.path);
          }
        }}
        style={{
          paddingLeft: this._calculateItemLeftPadding(level)
        }}
      >
        {this._renderItemText(item, item.type === "header" ? true : false)}
      </ListItem>
    );
  };
  render() {
    const { classes, visible, toggleSideBar, sidebar } = this.props;
    return (
      <WithWidth>
        {({ width }) => {
          // console.log("width", width);
          return (
            <Drawer
              variant={isWidthUp("md", width) ? "permanent" : "temporary"}
              className={classes.drawer}
              open={visible}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={() => toggleSideBar()}
            >
              <div className={classes.toolbar} />
              <Divider />
              <Accordion
                data={{
                  open: true,
                  type: "none",
                  sections: sidebar
                }}
                renderHeader={this._returnItem}
              />
            </Drawer>
          );
        }}
      </WithWidth>
    );
  }
}
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});
const mapStateToProps = state => {
  return {
    visible: state.page.common.sideBarVisible,
    sidebar: state.app.sidebar
  };
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
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withTheme()(Sidebar));
