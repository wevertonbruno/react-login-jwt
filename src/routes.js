import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Register from './components/Register';

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
            <Route exact path="/" component={ () => <h1>Login</h1> } />
            <Route path="/register" component={ Register } />
            <PrivateRoute path="/home" component={ () => <h1>Home</h1> } />
            <Route path="*" component={ () => <h1>Page Not Found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;