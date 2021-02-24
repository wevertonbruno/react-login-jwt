import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Container } from './styles';

import api from '../../services/api';
import { login } from './../../services/auth';
import Logo from '../../assets/logo.svg';

class Login extends Component{
    state ={
        email: "",
        password: "",
        error: ""
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        if  ( !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        }

        else{
            try {
                
                const response = await api.post("/auth/login", {email, password});
                login(response.data.token);
                this.props.history.push("/dashboard");

            } catch (err) {
                console.log(err);
                this.setState({ error: "An error has occurred processing your login. please try again..." });
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

                    <button type="submit">Login</button>

                    <hr/>

                    <Link to="/register">Don't have an account? Register!</Link>

                </Form>
            </Container>
        );
    }
}

export default withRouter(Login);
