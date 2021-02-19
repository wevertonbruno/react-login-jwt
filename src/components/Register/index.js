import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Container } from './styles';

import api from '../../services/api';
import Logo from '../../assets/logo.svg';

class Register extends Component{
    state ={
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        error: ""
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { username, email, password, password_confirmation } = this.state;

        if (!username || !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        }

        else if(password !== password_confirmation)
            this.setState({ error: "As senhas informadas não são iguais" });

        else{
            try {
                await api.post("/register", {username, email, password, password_confirmation});
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
            }
        }

        
    };

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} >
                    <img src={Logo} alt="Logo"/>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                    />

                    <input 
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        onChange={this.handleChange}
                    />

                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />

                    <input 
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm your Password"
                        onChange={this.handleChange}
                    />

                    <button type="submit">Register</button>

                    <hr/>

                    <Link to="/">Already registered? Log in!</Link>

                </Form>
            </Container>
        );
    }
}

export default withRouter(Register);
