import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { Title as TitleIcon } from "@material-ui/icons";
class Toolbar extends Component {
  render() {
    const { classes, position, sectionHeight } = this.props;
    return (
      <div
        className={classes.toggleContainer}
        style={{
          position: "absolute",
          left: position.left,
          top: position.top - sectionHeight - 24
        }}
      >
        <ToggleButtonGroup exclusive onChange={this.handleAlignment}>
          <ToggleButton value="left">
            <TitleIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <TitleIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <TitleIcon />
          </ToggleButton>
          <ToggleButton value="justify">
            <TitleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
const styles = theme => ({
  toggleContainer: {
    background: theme.palette.background.default
  }
});
export default withStyles(styles)(Toolbar);
