import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { toRenderProps } from "recompose";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
const WithWidth = toRenderProps(withWidth());
const drawerWidth = 280;
class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <WithWidth>
        {({ width }) => {
          // console.log("width", width);
          return (
            <Drawer
              variant={isWidthUp("md", width) ? "permanent" : "temporary"}
              className={classes.drawer}
              // open
              classes={{
                paper: classes.drawerPaper
              }}
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
export default withStyles(styles)(Sidebar);
