import React, { Component } from "react";
import Todo from "./todo";
import {
MDBBtn,
  MDBCard,
  MDBCol
} from "mdbreact";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let taskNodes = this.props.data.map((k, i) => {
      return <Todo key={i} task={k} />;
    });

    return (

        
        <MDBCol>
      <MDBCard style={{ width: "12rem" }}>
        {taskNodes}
      </MDBCard>
    </MDBCol>

    );
  }
}
