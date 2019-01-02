import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import XLSX from "xlsx";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class Document extends Component {
  constructor(props) {
    super(props);
  }
  _onDrop = ev => {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          this._handleDropXLSX(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        var file = ev.dataTransfer.files[i];
        this._handleDropXLSX(file);
      }
    }
    this._cleanUp(ev);
  };
  _onDragOver = ev => {
    ev.preventDefault();
  };
  _cleanUp = ev => {
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  };
  _handleDropXLSX = file => {
    var rABS = true;
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      if (!rABS) data = new Uint8Array(data);
      var workbook = XLSX.read(data, { type: rABS ? "binary" : "array" });

      /* DO SOMETHING WITH workbook HERE */
      console.log(workbook);
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };
  render() {
    return (
      <div
        ref={this._document}
        style={{
          height: 100,
          backgroundColor: "#666",
          marginTop: 120
        }}
        onDrop={this._onDrop}
        onDragOver={this._onDragOver}
      >
        DROP xlsx here
      </div>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = () => ({});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  graphql(
    gql`
      query {
        cats {
          id
          name
          description
          breed
        }
      }
    `,
    {
      props: ({ data: { cats } }) => {
        return { cats };
      }
    }
  )
)(Document);
