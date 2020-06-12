import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Wrapper } from "./styles";
import BannerComponent from "./includes/banner";
import KoreanComponent from "./includes/korean";
import RomanticComponent from "./includes/romantic";
import ComediesComponent from "./includes/comedies";
import AsianComponent from "./includes/asian";
class TvShows extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container className="mt-5">
          <BannerComponent />
          <KoreanComponent />
          <RomanticComponent />
          <ComediesComponent />
          <AsianComponent />
        </Container>
      </Wrapper>
    );
  }
}

export default TvShows;
