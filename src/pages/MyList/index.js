import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Content } from "./styles";
class MyList extends Component {
  state = {};
  render() {
    return (
      <Content>
        <Jumbotron>MyList</Jumbotron>
      </Content>
    );
  }
}

export default MyList;
