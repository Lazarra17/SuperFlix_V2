import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
class Movies extends Component {
  state = {};
  render() {
    return (
      <Content>
        <Jumbotron>Movies</Jumbotron>
      </Content>
    );
  }
}

export default Movies;
