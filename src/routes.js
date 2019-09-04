// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import About from './components/login/sign';
import Contact from './components/todoApp';
import Page404 from './components/Page404';


const LoginView = () => (
  <div>{localStorage.getItem('isLoggedin')!=false ? <Contact/>: <About/>} </div>
);


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/todo" component={LoginView} />

      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;