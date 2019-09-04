import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import {Link} from 'react-router-dom'

export default class login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
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
        const userStor=localStorage.getItem("userLogged");
        const pasStor=localStorage.getItem("passwordLogged");
        this.setState({ruta:"/"})
        console.log(userStor+pasStor)
        console.log(user+password)
        console.log(this.state.ruta)
        if( user===userStor &&  password===pasStor){
          console.log("holi")

            localStorage.setItem("isLoggedin",true);
            localStorage.setItem("userLogged",user);
            localStorage.setItem("passwordLogged",password);
           this.setState({ruta:"/todo"})
        }
        console.log(this.state.ruta+"if")
   
       
      }

    render(){
    
  return (
    <MDBContainer className="cambios">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
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
              <p className="font-small red-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="red-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  
                  color="red darken-3"
                  rounded
               
                  onClick={() => this.onSubmit()}
                  className="btn-block z-depth-1a"
                 
                >
                 
                 <li>  <Link 
                 style={{color:"white"}}
                 to={{pathname:this.state.ruta}}
            >Sign in </Link> </li>
                  
                </MDBBtn>
              </div>
        
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/singup" className="red-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );}
};

