import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
class Documents extends Component {
  render() {
    return <div>{/* <Text> textInComponent </Text> */}</div>;
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = () => {};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Documents);
