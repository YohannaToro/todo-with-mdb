import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TodoList from "./todoList";
import TaskForm from "./todoForm";
import { Link } from "react-router-dom";
import "../css/todo.scss";
import FilterForm from "./complements/cardList";
import FilterResults from "react-filter-search";
import axios from "axios";

export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      fil: false,
      value: "",
      listfilter: [],
      fil: false,
      update: false,
      prueba: [],
      imagenes: [{ img: null }],
      data: [
        {
          name: "lab4",
          id: "1",
          description: "some description text ",
          updateDate: "",
          fileURl: "",
          responsible: {
            name: "Santiago Carrillo",
            email: "sancarbar@gmail"
          },
          isDone: "ready",
          dueDate: 156464645646
        }
      ],
      userInput: ""
    };
  }
  componentDidMount() {
    var ima=[]
    axios.get("http://localhost:8080/boards/tasks").then(response => {
      //this.setState({data:response.data})
      var data = [];
      
      var i;
      for (i = 0; i < response.data.length; i++) {
        var item = response.data[i];
        ima.push(item.fileURl)
        data.push({
          name: item.name,
          id: item.id,
          description: item.description,
          updateDate: item.updateDate,
          fileURl: item.fileURl,
          responsible: {
            name: "Yohanna Toro",
            email: "yowis@hotmail.com"
          },
          isDone: item.isDone,
          dueDate: item.dueDate
        });
      }
      this.setState({ data: data });
    });
    var path = this.state;

    var i;
    var image = [];
    for (i = 0; i < ima.length; i++) {
      var item = ima[i]
      console.log(item+"url")
      axios
        .get("http://localhost:8080/boards/files/" + item)
        .then(response => image.push({ img: response.config.url }));
    }
    this.setState({ imagenes: image });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  changeUSerInput(input) {
    this.setState({ userInput: input });
  }
  addTask(input) {
    let array = this.state.list;
    array.push(input);
    this.setState({ list: array, userInput: "" });
  }
  handleCommentSubmit(task) {
    let tasks = this.state.data;
    var newTasks = tasks.concat([task]);
    this.setState({ data: newTasks });
    axios
      .post("http://localhost:8080/boards/tasks/addTask", task, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  }
  handleFilterSubmit(filter) {
    this.setState({ update: true });
    this.setState({ list: filter });
  }
  HandlerUpdateList(props) {
    const isUpdate = props.isUpdate;
    if (isUpdate) {
      return <TodoList data={this.state.list} />;
    }
    this.setState({ list: [] });
    return <TodoList data={this.state.data} />;
  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    const handleFil = () => this.setState({ fil: true });
    const handleFilClose = () => this.setState({ fil: false });
    const handleUpdate = () => this.setState({ update: true });
    const isLoggedIn = this.state.update;
    return (
      <div>
        {isLoggedIn ? (
          <TodoList data={this.state.list} onClick={handleUpdate} />
        ) : (
          <TodoList data={this.state.data} imagenes={this.state.imagenes} />
        )}

        <Button
          className="bt"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleShow}
        >
          New Task
        </Button>
        <Button
          className="bt"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleFil}
        >
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
            <FilterForm
              data={this.state.data}
              onFiltertSubmit={filter => this.handleFilterSubmit(filter)}
            />
          </Modal.Body>
          <Modal.Footer className="back">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={handleFilClose}
            >
              Close
            </Button>
            <Button color="black" variant="primary" onClick={handleFilClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
