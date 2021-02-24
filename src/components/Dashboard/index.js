import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Header from '../Header';
import Board from '../Board';

class Dashboard extends Component {
    render() {
        return (
            <DndProvider  backend={HTML5Backend} >
                <Header />
                <Board />
            </DndProvider>
        );
    }
}

export default withRouter(Dashboard);