import React,{Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TodoList from './todoList'
import TaskForm from './todoForm'
import {Link} from 'react-router-dom'
import '../css/todo.scss'

export default class TodoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            list:[],
           data:[ {
               "title":"lab4",
            "description": "some description text ",
            "responsible": {
                "name": "Santiago Carrillo",
                "email": "sancarbar@gmail"
            },
            "status": "ready",
            "dueDate": 156464645646
        }],
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
        
      }
  
        
    render(){
      
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
      
        return(
            <div >
                
               <TodoList data={this.state.data}/>
               <Button className="bt" style={{backgroundColor:'black',color:'white'}} onClick={handleShow}>
     New Task
      </Button>

      <Modal show={this.state.show} onHide={handleClose} className="center">
        <Modal.Header closeButton className="back">
          <Modal.Title>ADD NEW TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body className="back">
        <TaskForm onTasktSubmit={task => this.handleCommentSubmit(task)} />

        </Modal.Body>
      
      </Modal>
               
          
            </div>
          

        )
    }
}
/*<TaskForm onTasktSubmit={task => this.handleCommentSubmit(task)} />
                
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

*/