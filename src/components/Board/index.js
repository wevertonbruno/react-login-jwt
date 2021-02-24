import React, { Component } from 'react';
import List from './../List';
import { Container } from './styles';

import { loadLists } from './../../services/api2';

class Board extends Component {
    state = {
        isLoading: true,
        data: []
    };

    componentDidMount(){
        const data = loadLists();
        this.setState({data: data, isLoading: false});
    }


    render() {
        return (
            <Container>
                {this.state.isLoading ? (
                <h1>Loading</h1> ) : (
                    this.state.data.map( list => <List key={list.title} data={list} />)
                )}
            </Container>
        );
    }
}

export default Board;