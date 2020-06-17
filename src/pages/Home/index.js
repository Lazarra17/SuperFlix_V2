import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Content } from "./styles";
import BannerComponent from "./includes/banner";
import ActionComponent from "./includes/action";
import FantacyComponent from "./includes/fantacy";
const Home = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Super Flix</title>
      </Helmet>
      <Content>
        <Container className="mt-5">
          <BannerComponent />
          <ActionComponent />
          <FantacyComponent />
        </Container>
      </Content>
    </Fragment>
  );
};

export default Home;
