import React, { Component } from "react";
import Radium from "radium";
class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={[styles.container]}>
        <header style={[styles.header]} />
        <nav style={[styles.breadcrumbs]} />
        <nav style={[styles.sideNav]} />
        <main style={[styles.main]}>main</main>
        <footer style={[styles.footer]} />
      </div>
    );
  }
}

export default Radium(Layout);

const styles = {
  container: {
    margin: 0,
    padding: 0
  },
  header: {
    width: "100%",
    height: 112,
    position: "fixed",
    backgroundColor: "#333",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.5)",
    zIndex: 4,
    "@media (min-width:599px)": {
      height: 72
    }
  },
  breadcrumbs: {
    display: "none",
    width: "100%",
    height: 112,
    position: "fixed",
    backgroundColor: "#FFF",
    boxShadow: "2px 4px 10px rgba(0,0,0,0.2)",
    zIndex: 4,
    "@media (min-width:608px)": {
      height: 72
    }
  },
  sideNav: {
    position: "fixed",
    width: "320px",
    top: 0,
    bottom: 0,
    display: "block",
    borderRight: "1px solid rgba(0,0,0,.12)",
    zIndex: 3,
    padding: "72px 0 40px",
    overflowY: "auto",
    transition: "transform .15s cubic-bezier(.4,0,.2,1)",
    transform: "translateX(-100%)",
    "@media (min-width:1240px)": {
      transform: "translateX(0)"
    }
  },
  main: {
    minHeight: 640,
    width: "100%",
    margin: "0 auto",
    paddingLeft: 16,
    paddingRight: 16,
    "@media screen and (min-width:600px)": {
      maxWidth: 688,
      paddingLeft: 24,
      paddingRight: 24
    },
    "@media screen and (min-width:1240px)": {
      maxWidth: 1000,
      paddingLeft: 320,
      paddingRight: 40
    }
  },
  footer: {}
};
