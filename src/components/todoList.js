import React, { Component } from "react";
import Todo from "./todo";
import {
MDBBtn,
  MDBCard,
  MDBCol,
  MDBRow
} from "mdbreact";
import '../css/todo.scss'
export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let taskNodes = this.props.data.map((k, i) => {
      return (
        <MDBCard className="modal-style" style={{ width: "19rem",marginBottom:'5%' }}>
      <Todo key={i} task={k} /></MDBCard>);
    });

    return (

        
        <MDBRow style={{justifyContent:'center'}}>
          
      
        {taskNodes}
      
    </MDBRow>

    );
  }
}
