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
    var imagenes=this.props.imagenes;
    console.log("hola coronamos")
    console.log(imagenes)
    let taskNodes = this.props.data.map((k, i) => {

      return (
        <MDBCol>
        <MDBCard className="modal-style" style={{marginBottom:'5%' }}>
      <Todo key={i} task={k} /></MDBCard></MDBCol>);
    });

    return (

        
        <MDBRow style={{justifyContent:'center'}}>
          
      
        {taskNodes}
      
    </MDBRow>

    );
  }
}
