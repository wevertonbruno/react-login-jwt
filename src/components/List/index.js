import React, { Component } from 'react';
import { Container } from './styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '../Card';

const List = ({ data }) => {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {
                data.creatable && 
                <button type="button">
                    <AddIcon size={24} style={{ color: "white" }} />
                </button>
                }
                
            </header>

            <ul>
                { data.cards.map(card => <Card key={card.id} data={card} />)}
            </ul>
        </Container>
    );
}

export default List;