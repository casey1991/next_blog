import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
const drawerWidth = 280;
class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={classes.drawer}
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
