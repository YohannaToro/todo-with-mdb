// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/login/sign';
import Todo from './components/todoApp';
import Page404 from './components/Page404';




const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/todo" component={Todo} />

      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;