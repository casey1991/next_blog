import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import XLSX from "xlsx";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { hasIn } from "lodash";
import * as FileSaver from "file-saver";
// ui

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
  RootRef,
  withStyles
} from "@material-ui/core";
import { CloudDownload as DownloadIcon } from "@material-ui/icons";
class Goods extends Component {
  constructor(props) {
    super(props);
    this._table = React.createRef();
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
  _downloadTable = () => {
    const canParse = hasIn(this._table, "current.ref");
    if (canParse) {
      const excelBook = XLSX.utils.table_to_book(this._table.current.ref);
      const wb = XLSX.write(excelBook, {
        type: "xlsx",
        bookSST: true,
        type: "binary"
      });
      function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
          view[i] = s.charCodeAt(i) & 0xff;
        }
        return buf;
      }
      FileSaver.saveAs(
        new Blob([s2ab(wb)], { type: "application/octet.stream" }),
        "test.xlsx"
      );
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab
          color="primary"
          aria-label="Download"
          onClick={this._downloadTable}
          className={classes.fab}
        >
          <DownloadIcon />
        </Fab>
        <RootRef ref={this._table}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat (g)</TableCell>
                <TableCell align="right">Carbs (g)</TableCell>
                <TableCell align="right">Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  HHH
                </TableCell>
                <TableCell align="right">row.calories</TableCell>
                <TableCell align="right">row.fat</TableCell>
                <TableCell align="right">row.carbs</TableCell>
                <TableCell align="right">row.protein</TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell component="th" scope="row">
                  HHH
                </TableCell>
                <TableCell align="right">row.calories</TableCell>
                <TableCell align="right">row.fat</TableCell>
                <TableCell align="right">row.carbs</TableCell>
                <TableCell align="right">row.protein</TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell component="th" scope="row">
                  HHH
                </TableCell>
                <TableCell align="right">row.calories</TableCell>
                <TableCell align="right">row.fat</TableCell>
                <TableCell align="right">row.carbs</TableCell>
                <TableCell align="right">row.protein</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </RootRef>
      </div>
    );
  }
}
const styles = theme => ({
  fab: {
    position: "absolute",
    margin: theme.spacing.unit * 2,
    bottom: 0,
    right: 0
  },
  table: {
    backgroundColor: "#fff"
  }
});
const mapStateToProps = state => ({});
const mapDispatchToProps = () => ({});
export default compose(
  withStyles(styles),
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
)(Goods);