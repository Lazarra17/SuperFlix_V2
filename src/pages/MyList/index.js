import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
const MyList = () => {
  return (
    <Fragment>
      <Helmet>
        <title>MyList | Super Flix</title>
      </Helmet>
      <Content>
        <Jumbotron>MyList</Jumbotron>
      </Content>
    </Fragment>
  );
};

export default MyList;
