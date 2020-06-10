import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
class Home extends Component {
  state = {};
  render() {
    return (
      <Content>
        <Jumbotron>Home</Jumbotron>
      </Content>
    );
  }
}

export default Home;
