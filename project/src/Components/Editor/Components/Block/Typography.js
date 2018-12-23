import React, { Component } from "react";
// material ui
import { Typography } from "@material-ui/core";
class Text extends Component {
  render() {
    const { children, ...rest } = this.props;
    return <Typography {...rest}>{this.props.children}</Typography>;
  }
}
export default Text;
