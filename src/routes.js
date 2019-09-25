// Dependencies
import React, { Profiler } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/login/sign';
import Todo from './components/todoApp';
import Page404 from './components/Page404';
import Profile from './components/profile/profile'
import Side from './components/complements/sideBar'
import Signup from './components/login/signup'
import Filter from './components/complements/cardList'
import EditProfile from './components/profile/EditProfile'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/logout" component={Login} />
      <Route exact path="/filter" component={Filter} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/side" component={Side}/>
      <Route exact path="/singup" component={Signup}/>
      <Route exact path="/settings/profile" component={EditProfile}/>
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;