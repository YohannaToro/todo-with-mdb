import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import ApiService from "./services/apiServices";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class taskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: "",
      description: "",updateDate:new Date().toISOString().slice(0, 10),
      name: "",
      responsible: {
        email: "",
        userName: ""
      },
      dueDate: new Date(),
      selectedFile: null,fileUrl:""
    };
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleResponsibleEmailChange(e) {
    this.setState({ responsible: { email: e.target.value } });
  }

  onChangeHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],fileUrl:event.target.files[0].name
    });
  };

  handleTextChange(e) {
    this.setState({ title: e.target.value });
  }
  handlePirorityChange(e) {
    this.setState({ status: e.target.value });
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleSubmit(e) {
    e.preventDefault();

    var text = this.state.title.trim();
    var prior = this.state.status.trim();
    var des = this.state.description.trim();
    var resName = this.state.name.trim();
    var resEmail = this.state.responsible.email.trim();
    var d = this.state.dueDate;
    var fileNam=this.state.fileUrl;
    console.log(d);

    if (!text || !prior) {
      return;
    }
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8080/boards/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
    this.props.onTasktSubmit({
      name: text,
      updateDate: this.state.updateDate,
      dueDate: d,
      description: des,
      isDone:prior,
      responsible: {
        name: resName,
        email: resEmail
      },fileUrl:fileNam
    });
    this.setState({
      name: "",
      status: "",
      description: "",
      title: "",
      responsible: {
        some: "",
        email: ""
      },
      dueDate: new Date(),fileName:""
    });
  }

  render() {
    return (
      <MDBRow className="form-modal ">
        <MDBCol md="6" className="modal-style">
          <form className="task-Formi" onSubmit={e => this.handleSubmit(e)}>
            <MDBInput
              className="input-content"
              type="text"
              label="title"
              placeholder="title"
              icon="pencil-alt"
              value={this.state.title}
              onChange={e => this.handleTextChange(e)}
            />
            <MDBInput
              className="input-pririty"
              type="text"
              label="Status"
              icon="bookmark"
              placeholder="status"
              value={this.state.status}
              onChange={e => this.handlePirorityChange(e)}
            />
            <MDBInput
              className="input-pririty"
              type="text"
              label="Description"
              icon="bookmark"
              placeholder="Description"
              value={this.state.description}
              onChange={e => this.handleDescriptionChange(e)}
            />
            <MDBInput
              className="input-pririty"
              type="text"
              label="Responsible user"
              icon="bookmark"
              placeholder="Responsible name"
              value={this.state.name}
              onChange={e => this.handleNameChange(e)}
            />
            <MDBInput
              className="input-pririty"
              type="text"
              label="Responsible email"
              icon="bookmark"
              placeholder="Add a description"
              value={this.state.responsible.email}
              onChange={e => this.handleResponsibleEmailChange(e)}
            />

            <input type="file" name="file" onChange={this.onChangeHandler} />

            <DatePicker
              icon="calendar-plus"
              selected={this.state.dueDate}
              onChange={this.handleChange}
            />

            <p>
              <Button
                type="submit"
                className="btn-right"
                variant="outlined"
                color="primary"
              >
                <a>Add Task</a>
              </Button>
            </p>
          </form>
        </MDBCol>
      </MDBRow>
    );
  }
}
