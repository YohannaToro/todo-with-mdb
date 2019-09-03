import React,{Component} from 'react'

export default class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var dta=this.props.task.dueDate.toString();
        return(

          <div className=" co-content">
            
              <h2 className="commentAuthor">
              <p className="card-text">Task: {this.props.task.content}</p>
              <p className="card-text">Priority: {this.props.task.priority}</p>
            <p className="card-text">Due date: {dta}</p>
 
			</h2>
              {this.props.children}
          </div>
        
        
        )
    }

}