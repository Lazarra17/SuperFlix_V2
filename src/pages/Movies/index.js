import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { Wrapper } from "./styles";
import BannerComponent from "./includes/banner";
import SciFiComponent from "./includes/sci-fi";
import RomanticComponent from "./includes/romantic";
import ComediesComponent from "./includes/comedies";
import SportsComponent from "./includes/sports";
const TvShows = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Super Flix</title>
      </Helmet>
      <Wrapper>
        <Container className="mt-5">
          <BannerComponent />
          <SciFiComponent />
          <RomanticComponent />
          <ComediesComponent />
          <SportsComponent />
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default TvShows;
