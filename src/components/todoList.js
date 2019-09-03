import React, { Component } from 'react'
import Todo from './todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
       }
      
       render(){
        let taskNodes = this.props.data.map((k,i)=>{
          
            return (
              <Todo  key={i} task={k}/>
            );
          });
           
        return (
          <div className="infoss">
             TO DO:
            {taskNodes}
            
          </div>
         );	
       }
}
