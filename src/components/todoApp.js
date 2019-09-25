import React,{Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TodoList from './todoList'
import TaskForm from './todoForm'
import {Link} from 'react-router-dom'
import '../css/todo.scss'
import FilterForm from './complements/cardList'
import FilterResults from 'react-filter-search';

export default class TodoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,fil:false,value:"",
            listfilter:[],fil:false,update:false,
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

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };
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
    handleFilterSubmit(filter) {
        console.log("updatedList")
        console.log(filter)
        this.setState({update:true})
        this.setState({list:filter})
        
      }
      HandlerUpdateList(props){
        const isUpdate = props.isUpdate;
        if (isUpdate) {
          return <TodoList data={this.state.list}/>
        }
        this.setState({list:[]})
        return <TodoList data={this.state.data}/>;

      }
        
    render(){
      
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        const handleFil=()=>this.setState({fil:true});
        const handleFilClose=()=>this.setState({fil:false});
        const handleUpdate=()=>this.setState({update:true});
        const isLoggedIn = this.state.update;
        return(
            <div >
        
           {isLoggedIn ? (
            
        <TodoList data={this.state.list} onClick={handleUpdate}/>
      ) : (
        <TodoList data={this.state.data}/>
      )}
       
               <Button className="bt" style={{backgroundColor:'black',color:'white'}} onClick={handleShow}>
     New Task
      </Button>
      <Button className="bt" style={{backgroundColor:'black',color:'white'}} onClick={handleFil}>
     Filter task
      </Button>
           
      <Modal show={this.state.show} onHide={handleClose} className="center">
        <Modal.Header closeButton className="back">
          <Modal.Title>ADD NEW TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body className="back">
        <TaskForm onTasktSubmit={task => this.handleCommentSubmit(task)} />

        </Modal.Body>
      
      </Modal>
      <Modal show={this.state.fil} onHide={handleFilClose} className="center">
        <Modal.Header closeButton className="back">
          <Modal.Title>Filter task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="back">
            
        <FilterForm data={this.state.data} onFiltertSubmit={filter => this.handleFilterSubmit(filter)} />
        </Modal.Body>
        <Modal.Footer className="back">
          <Button  style={{background:"black",color:"white"}} onClick={handleFilClose}>
            Close
          </Button>
          <Button color="black" variant="primary" onClick={handleFilClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
               
          
            </div>
          

        )
    }
}
