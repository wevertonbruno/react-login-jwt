import React, { Component } from React;
import { Link } from 'react-router-dom';
import { Form, Container } from './styles';

class Register extends Component{
    state ={
        username: "",
        email: "",
        password: "",
        error: ""
    };

    handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
    };

    render(){
        return (
            //whatever
        );
    }


}
