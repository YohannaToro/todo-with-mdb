import React,{Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';

import TodoList from './todoList'
import TaskForm from './todoForm'
import {Link} from 'react-router-dom'

export default class TodoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
           data:[],
            userInput:''
        }
    }
    changeUSerInput(input){
        this.setState({userInput:input});

    }
    addTask(input){
        let array=this.state.list;
        array.push(input);
        this.setState({list:array,userInput:""
        })
    }
    handleCommentSubmit(task) {
        let tasks = this.state.data;
        var newTasks = tasks.concat([task]);
        this.setState({data: newTasks});    
     
    } 
    logOut() {
        localStorage.removeItem("isLoggedin");
        window.location.reload();
        console.log(localStorage+"byeeeeeeeeeee");
      }
    render(){
      
        return(
            <div className="infos">
                <TaskForm onTasktSubmit={task => this.handleCommentSubmit(task)} />
                <TodoList data={this.state.data}/>
                <MDBBtn
                  type="button"
                  
                  color="red darken-3"
                  rounded
               
                  onClick={this.logOut}
                  className="btn-block z-depth-1a"
                 
                >
                     <Link style={{color:"white"}}to={{pathname:'/'
                
            }}>Sign out </Link>
                
                  
                </MDBBtn>
            
            </div>
          

        )
    }
}
/*
    <input 
                onChange={(e)=> this.changeUSerInput(e.target.value)}
                value={this.state.userInput} 
                type="text"/>
                <button onClick={()=> this.addTask(this.state.userInput)}>Press me</button>
*/