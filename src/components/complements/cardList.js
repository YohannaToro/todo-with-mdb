import React, { Component } from "react";
import { MDBInput,MDBRow,MDBCol } from "mdbreact";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: false
    };

    this.filterTitle = this.filterTitle.bind(this);
    this.filterStatus = this.filterStatus.bind(this);
    this.filterResponsible = this.filterResponsible.bind(this);
  }

 
  filterResponsible(e) {
    var updatedList = this.state.todo;
    updatedList = updatedList.filter(item => {
      return (
        item.responsible.name
          .toLowerCase()
          .search(e.target.value.toLowerCase()) !== -1
      );
    });
    if (updatedList == 0) {
      this.props.onFiltertSubmit(this.props.data);
      this.setState({
        message: true
      });
    } else {
      this.props.onFiltertSubmit(updatedList);
      this.setState({
        message: false
      });
    }
  }
  filterStatus(e) {
    var updatedList = this.state.todo;
    updatedList = updatedList.filter(item => {
      return (
        item.status.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    if (updatedList == 0) {
      this.props.onFiltertSubmit(this.props.data);
      this.setState({
        message: true
      });
    } else {
      this.props.onFiltertSubmit(updatedList);
      this.setState({
        message: false
      });
    }
  }

  filterTitle(e) {
    var updatedList = this.props.data;
    updatedList = updatedList.filter(item => {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });

    if (updatedList == 0) {
      this.props.onFiltertSubmit(this.props.data);
      this.setState({
        message: true
      });
    } else {
      this.props.onFiltertSubmit(updatedList);
      this.setState({
        message: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container wb">
          <div className="row" style={{textAlign:"center",justifyContent:"center"}}>
           
              {this.state.message ? "No search results.": ""}
        
          </div>
          <MDBRow className="form-modal " >
            <MDBCol md="6" className="modal-style">
           
          <form className="task-Formi">
          <MDBInput
            type="text"
            label="Filter title"
            className="center-block"
            placeholder="Filter title"
            onChange={this.filterTitle}
          />
          <MDBInput
            type="text"
            label="Filter status"
            className="center-block"
            placeholder="Filter status"
            onChange={this.filterStatus}
          />
          <MDBInput
            type="text"
            label="Filter responsible"
            className="center-block"
            placeholder="Filter responsible"
            onChange={this.filterResponsible}
          /></form></MDBCol></MDBRow>
        </div>
      </div>
    );
  }
}
