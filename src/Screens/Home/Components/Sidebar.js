import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
// libs
import { toRenderProps } from "recompose";
// actions
import { Actions } from "../../../Redux/Page/actions";

const WithWidth = toRenderProps(withWidth());
const drawerWidth = 280;
class Sidebar extends Component {
  render() {
    const { classes, visible, toggleSideBar } = this.props;
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
              <List>
                {["Introduction", "Material studies"].map(text => (
                  <ListItem button key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
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
    visible: state.page.common.sideBarVisible
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Sidebar);
