import React, { Component } from "react";
import Radium from "radium";
// components
import Footer from "./Footer";
import Header from "./Header";
import { Colors, Dimensions } from "../Themes";

class Menu extends Component {
  static Footer = Footer;
  static Header = Header;
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return (
      <div style={[style, styles.containner]}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
export default Radium(Menu);
const styles = {
  containner: {
    display: "flex",
    flexDirection: "column"
  }
};
