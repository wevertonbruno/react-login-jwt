import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

console.log(isAuthenticated());

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render = { props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : ( 
                <Redirect to={{pathname:"/", state: { from: props.location }}} /> 
            ) 
        } 
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ Register } />
            <PrivateRoute path="/dashboard" component={ Dashboard } />
            <Route path="*" component={ NotFound } />
        </Switch>
    </BrowserRouter>
);

export default Routes;