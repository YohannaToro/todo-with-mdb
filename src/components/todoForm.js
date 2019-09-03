import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class taskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:'',
            priority:'',
            dueDate:new Date()
        }
   
       }

 

   
        handleTextChange(e) {
            this.setState({content: e.target.value});
        }
        handlePirorityChange(e){
            this.setState({priority:e.target.value})
        }
        handleChange = date => {
            this.setState({
              startDate: date
            });
          };
        handleSubmit(e) {
            e.preventDefault();
           
            var text 		= this.state.content.trim();
            var prior=this.state.priority.trim();
            var d=this.state.dueDate;
            console.log(d);
            if (!text || !prior) {
                return;
            }
            this.props.onTasktSubmit({ content: text,priority:prior,dueDate:d});
            this.setState({content: '',priority:'',dueDate:new Date()});
        }
        
    render() {
        return (
            <form className="task-Formi" onSubmit={(e) => this.handleSubmit(e)}> 
		
			 <Input
			 	className="input-content"
				 type="text"
				 placeholder="Add a task"
				 value={this.state.content}
				 onChange={(e) => this.handleTextChange(e)} 
			 /> 
             <Input
			 	className="input-pririty"
				 type="text"
				 placeholder="Add a priority"
				 value={this.state.priority}
				 onChange={(e) => this.handlePirorityChange(e)} 
			 /> 
         
         <DatePicker
        selected={this.state.dueDate}
        onChange={this.handleChange}
      />


			<p><Button type="submit" className="btn-right" variant="outlined" color="primary">
                <a >Add Task</a></Button></p>
			 
		 </form>
        )
    }
}
