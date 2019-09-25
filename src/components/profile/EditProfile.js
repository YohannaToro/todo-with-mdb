import React, { Component } from 'react'
import {MDBContainer,MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import Side from '../complements/sideBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../css/settings.scss'
export default class EditProfile extends Component {
    render() {
        return (
            <div>
             <CssBaseline />
      <AppBar>
        <Toolbar className="nav-changes">
          <Side/>
        </Toolbar>
      </AppBar>

            <MDBContainer className="set-profile" >

                <MDBRow>
                    
                        <form>
                        <p className="h4 text-center mb-4">Public profile</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                             Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        />
                          <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Public email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Bio
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4" >
              <MDBBtn color="black" outline type="submit">
              <MDBIcon far icon="thumbs-up" className="ml-2" style={{padding:'2%'}}/>
                Update profile
           
              </MDBBtn>
            </div>
                        </form>

                    
                </MDBRow>
            </MDBContainer></div>
        )
    }
}
