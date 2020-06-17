import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
const Movies = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Movies | Super Flix</title>
      </Helmet>
      <Content>
        <Jumbotron>Movies</Jumbotron>
      </Content>
    </Fragment>
  );
};

export default Movies;
