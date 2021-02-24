import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { logout } from '../../services/auth';
import api from '../../services/api';
import Logo from '../../assets/logo.svg';

class Header extends Component {

    async handleLogout(){
        try{
            const response = await api.post("/auth/logout");
            logout();
            this.props.history.push("/");
        }catch(error){
            console.log(error);
        }
    }

    render() {
        return (
            <Container>
                <Link to="/dashboard">
                    <img src={Logo} alt={"Logo"} />
                    <h1>Organizer</h1>
                </Link>
                <a onClick={ this.handleLogout }><i className="fa fa-power-off"></i></a>
            </Container>
        );
    }
}

export default Header;