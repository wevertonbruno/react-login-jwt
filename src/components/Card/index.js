import React, { Component } from 'react';
import { Container, Label } from './styles';
import avatar from '../../assets/avatar.jpg';

import { useDrag } from 'react-dnd';

const Card = ({data}) => {
    
    const [{ isDragging }, dragRef ] = useDrag({
        item: { type: 'CARD' },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    });

    return (
        <Container ref={dragRef} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label color={label} key={label}/>)}
            </header>
            <p>{ data.content }</p>
            {data.user && <img src={data.user} alt=""/>}
        </Container>
    );
    
}

export default Card;