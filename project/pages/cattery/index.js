import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";
import { map } from "lodash";
import {
  Layout,
  Header,
  Sidebar,
  Main
} from "../../src/Components/Layouts/Basic";

// temp
import gql from "graphql-tag";
import {
  Card,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Icon
} from "@material-ui/core";
import { graphql, withApollo } from "react-apollo";
class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  _renderItem = cat => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image="/static/img/home_bg.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {cat.name}
            </Typography>
            <Typography variant="caption" component="p" gutterBottom>
              {cat.breed}
            </Typography>
            <Typography variant="body1" component="p">
              {cat.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  _renderList = cats => {
    return (
      <Grid container spacing={24}>
        {/*  */}
        {map(cats, cat => {
          return (
            <Grid item xs={12} sm={6} md={4} key={cat.id}>
              {this._renderItem(cat)}
            </Grid>
          );
        })}
      </Grid>
    );
  };
  render() {
    const { router, cats } = this.props;
    return (
      <Layout>
        <Header
          active={1}
          onItemClick={route => {
            router.push(route);
          }}
        />
        <Sidebar />
        <Main style={{ marginTop: 120 }}>{this._renderList(cats)}</Main>
      </Layout>
    );
  }
}
export default compose(
  withRouter,
  withApollo,
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
)(Page);
