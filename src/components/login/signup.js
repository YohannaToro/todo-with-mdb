import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import {Link} from 'react-router-dom'
import '../../css/banner.scss'

export default class login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:"",
            ruta:"/"
        }
        this.login = this.login.bind(this)
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    login(){
        
        //getUser(this.state,console.log,console.log);
      }
      onSubmit  () {
        const user= this.state.username.trim();
        const password= this.state.password.trim();
        const email= this.state.email.trim();
        localStorage.setItem("userLogged",user);
        localStorage.setItem("passwordLogged",password);
        
        if( !user &&  !password && !email){

           this.setState({username:user,
            email:email,password:password,
            ruta:"/profile"})
        }
      }

    render(){
    
  return (
  
      <MDBRow className="position-login">
        
          <MDBCard>
            <MDBCardBody className="mx-4">

    <div className="book" style={{marginBottom:'20%'}}>
      
      <div className="pages">
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
      </div>
      <br /><br /><br /><br /><br /><br /> TASK <br /> <br />PLANNER
      <div className="bookmark"></div>
    

              </div>
              <div style={{marginTop:'80%'}}>
              <MDBInput
                label="Email"
                icon="user"
                name="email"
                group
                required="required" 
                onChange={e => this.onChange(e)}
                value={this.state.email}
                type="email"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Username"
                name="username"
                icon="user"
                group
                type="email"
                onChange={e => this.onChange(e)}
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                name="password"
                group
                required="required" 
                onChange={e => this.onChange(e)}
                value={this.state.password}
                type="password"
                validate
                containerClass="mb-0"
              />
            
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
             
                  color="black darken-3"
                  rounded
               
                  onClick={() => this.onSubmit()}
                  className="btn-block z-depth-1a"
                 
                >
                 
                 <li>  <Link 
                 style={{color:"white"}}
                 to={{pathname:this.state.ruta}}
            >Sign up </Link> </li>
                  
                </MDBBtn>
              </div>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                 a member?
                <a href="/singup" className="black-text ml-1">

                  Sign in
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
      
      </MDBRow>
    
  );}
};

