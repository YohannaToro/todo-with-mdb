import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class taskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:"",
            description:'',
            title:'',
            name:"",
            responsible: 
            {
                email: "",userName: ""
            },
            dueDate:new Date()
        }
   
       }

       handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }
    handleNameChange(e){
      
        this.setState({name:e.target.value})
       
    }
    handleResponsibleEmailChange(e){
        this.setState({responsible:{email:e.target.value}})
    }


   
        handleTextChange(e) {
            this.setState({title: e.target.value});
        }
        handlePirorityChange(e){
            this.setState({status:e.target.value})
        }
        handleChange = date => {
            this.setState({
              startDate: date
            });
          };
        handleSubmit(e) {
            e.preventDefault();
           
            var text= this.state.title.trim();
            var prior=this.state.status.trim();
            var des=this.state.description.trim();
            var resName=this.state.name.trim();
            var resEmail=this.state.responsible.email.trim();
            var d=this.state.dueDate;
            console.log(d);
            if (!text || !prior) {
                return;
            }
            this.props.onTasktSubmit({ title: text,startDate:prior,dueDate:d,description:des,responsible: {
                "name": resName,
                "email": resEmail
            }});
            this.setState({
                name:"",
                status:"",
                description:'',
                title:'',
                responsible: {
                    some: "",
                    email: ""
                },
                dueDate:new Date()
            });
        }
        
    render() {
        return (
            <MDBRow className="form-modal " >
            <MDBCol md="6" className="modal-style">
            <form className="task-Formi" onSubmit={(e) => this.handleSubmit(e)}> 
		
			 <MDBInput
			 	className="input-content"
                 type="text"
                 label="title"
                 placeholder="title"
                 icon="pencil-alt"
				 value={this.state.title}
				 onChange={(e) => this.handleTextChange(e)} 
			 /> 
             <MDBInput
			 	className="input-pririty"
                 type="text"
                 label="Status"
                 icon="bookmark"
				 placeholder="status"
				 value={this.state.status}
				 onChange={(e) => this.handlePirorityChange(e)} 
			 /> 
             <MDBInput
			 	className="input-pririty"
                 type="text"
                 label="Status"
                 icon="bookmark"
				 placeholder="Description"
				 value={this.state.description}
				 onChange={(e) => this.handleDescriptionChange(e)} 
			 /> 
             <MDBInput
			 	className="input-pririty"
                 type="text"
                 label="Responsible user"
                 icon="bookmark"
                 placeholder="Responsible name"
				 value={this.state.name}
				 onChange={(e) => this.handleNameChange(e)} 
			 />
             <MDBInput
			 	className="input-pririty"
                 type="text"
                 label="Responsible email"
                 icon="bookmark"
				 placeholder="Add a description"
				 value={this.state.responsible.email}
				 onChange={(e) => this.handleResponsibleEmailChange(e)} 
			 />

         <DatePicker
         icon="calendar-plus" 
        selected={this.state.dueDate}
        onChange={this.handleChange}
      />


			<p><Button type="submit" className="btn-right" variant="outlined" color="primary">
                <a >Add Task</a></Button></p>
			 
		 </form></MDBCol></MDBRow>
        )
    }
}
