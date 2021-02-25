import React, { Component, useState, useEffect } from 'react';
import List from './../List';
import { Container } from './styles';

import { loadLists } from './../../services/api2';
import BoardContext from './context';
import produce from 'immer';

const Board = () => {

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [change, setChange] = useState(false);

    useEffect(() => {
        const data = loadLists();
        setLists(data);
        setLoading(false);
    }, []);

    function move(fromList, toList, from, to){
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];
            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);

        }));
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {loading ? (
                <h1>Loading</h1> ) : (
                    lists.map( ( list, index ) => <List index={index} key={list.title} data={list} />)
                )}
            </Container>
        </BoardContext.Provider>
    );
}

export default Board;