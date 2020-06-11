import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Content } from "./styles";
import BannerComponent from "./includes/banner";
import ActionComponent from "./includes/action";
import FantacyComponent from "./includes/fantacy";
class Home extends Component {
  state = {};
  render() {
    return (
      <Content>
        <Container className="mt-5">
          <BannerComponent />
          <ActionComponent />
          <FantacyComponent />
        </Container>
      </Content>
    );
  }
}

export default Home;
