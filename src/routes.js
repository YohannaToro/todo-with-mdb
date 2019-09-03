import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import TodoApp from './components/todoApp'
import Sign from './components/login/sign'


const AppRoutes=({match})=>
    <App>
        <Switch>
            <Route exact path="/" Component={TodoApp}/>
            <Route exact path="/login" Component={Sign}/>
        </Switch>
    </App>;

export default AppRoutes;