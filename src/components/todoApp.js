import React,{Component} from 'react'

import TodoList from './todoList'
import TaskForm from './todoForm'

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
    render(){
      
        return(
            <div className="infos">
                <TaskForm onTasktSubmit={task => this.handleCommentSubmit(task)} />
                <TodoList data={this.state.data}/>
            
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