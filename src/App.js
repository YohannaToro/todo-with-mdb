import React, { Component } from "react";
import PropTypes from 'prop-types'

// import "../css/App.css";
import './css/home.css'
class App extends Component {
  static propTypes ={
    children: PropTypes.object.isRequired
  }
  render() {
 
    const {children} = this.props;

    //console.log({children})
    if (localStorage.getItem('isLoggedIn') === undefined) {
      localStorage.setItem('isLoggedIn', false);
  }
    const loged = localStorage.getItem('isLoggedin');
    
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;