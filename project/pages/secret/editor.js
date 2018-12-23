import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";

// layouts
import { Layout, Main, Sidebar } from "../../src/Components/Layouts/Basic";
import { Header } from "../../src/Components/Layouts/Secret";
// material ui
import { Grid } from "@material-ui/core";
// components
import Editor from "../../src/Components/Editor";
class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Header />
        <Sidebar />
        <Main>
          <div
            style={{
              marginTop: 120
            }}
          />
          <Grid container>
            <Grid md={2} item>
              {/* toolbar area */}
            </Grid>
            <Grid md={10} item>
              <Editor />
            </Grid>
          </Grid>
        </Main>
      </Layout>
    );
  }
}
export default compose(withRouter)(Page);
