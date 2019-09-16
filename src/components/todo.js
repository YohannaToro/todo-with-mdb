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


              <MDBCardBody>
                <h4 className="font-weight-bold mb-3">{this.props.task.responsible.name}</h4>
              <p className="font-weight-bold blue-text">{this.props.task.responsible.email}</p>
          <MDBCardTitle>{this.props.task.title}</MDBCardTitle>
          <MDBCardText>
          Description: {this.props.task.description}
          </MDBCardText>
          <MDBCardText>
          Status: {this.props.task.status}
          </MDBCardText>
          <MDBCardText>
          Due date: {dta}
          </MDBCardText>
          <MDBBtn href="#">Done</MDBBtn>
        </MDBCardBody>
       
        
        )
    }

}