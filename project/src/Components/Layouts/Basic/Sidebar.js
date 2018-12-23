import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
// material ui libs
import { withStyles } from "@material-ui/core";
import { Drawer, Divider, Typography, Collapse } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
// libs
import { toRenderProps } from "recompose";
// actions
import { Actions } from "../../../Redux/Page/actions";

const WithWidth = toRenderProps(withWidth());
const drawerWidth = 280;
class Sidebar extends Component {
  _renderDivider = () => {
    return <Divider />;
  };
  _returnItem = item => {
    return (
      <ListItem button key={item.name}>
        <ListItemText secondary={item.name} />
      </ListItem>
    );
  };
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
              <Divider />
              <List>
                <List
                  subheader={
                    <ListSubheader>
                      <Typography
                        variant="subtitle1"
                        className={classes.drawerSubheader}
                      >
                        Material System
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {["Introduction", "Material studies"].map(text => (
                    <ListItem button key={text}>
                      <ListItemText secondary={text} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List
                  subheader={
                    <ListSubheader>
                      <Typography
                        variant="subtitle1"
                        className={classes.drawerSubheader}
                      >
                        Material Foundation
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {[
                    "Foundation overview",
                    "Environment",
                    "Layout",
                    "Navigation"
                  ].map(text => (
                    <ListItem button key={text}>
                      <ListItemText secondary={text} />
                    </ListItem>
                  ))}
                  <Collapse timeout="auto" unmountOnExit in>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Understanding layout" />
                      </ListItem>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Density & resolution" />
                      </ListItem>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Responsive layout grid" />
                      </ListItem>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Spacing methods" />
                      </ListItem>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Component behavior" />
                      </ListItem>
                      <ListItem button className={classes.nestListItem}>
                        <ListItemText secondary="Density" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
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
  drawerSubheader: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  toolbar: theme.mixins.toolbar,
  nestListItem: {
    paddingLeft: theme.spacing.unit * 6
  }
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
