import React,{Component} from 'react'
import {
    MDBBtn,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
    } from "mdbreact";
export default class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var dta=this.props.task.dueDate.toString();
        console.log(this.props.task.responsible.email)
        return(


              <MDBCardBody >
                <h4 className="font-weight-bold mb-3" style={{fontSize:"90%"}} >{this.props.task.responsible.name}</h4>
              <p className="font-weight-bold blue-text" style={{fontSize:"90%"}}>{this.props.task.responsible.email}</p>
          <MDBCardTitle style={{fontSize:"90%"}}>{this.props.task.title}</MDBCardTitle>
          <MDBCardText style={{fontSize:"70%"}}>
          Description: {this.props.task.description}
          </MDBCardText>
          <MDBCardText style={{fontSize:"70%"}}>
          Status: {this.props.task.status}
          </MDBCardText>
          <MDBCardText style={{fontSize:"70%"}}>
          Due date: {dta}
          </MDBCardText>
        </MDBCardBody>
       
        
        )
    }

}