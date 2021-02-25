import React, { Component, useRef, useContext } from 'react';
import { Container } from './styles';
import AddIcon from '@material-ui/icons/Add';

import Card from '../Card';
import { useDrop } from 'react-dnd';
import BoardContext from './../Board/context';


const List = ({ data, index: listIndex }) => {

    const { moveList } = useContext(BoardContext);
    const lastIndex = data.cards.length;

    const [, dropRef ] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            const draggedIndex = item.index;
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            //nn faz nada se for na mesma lista
            if(draggedListIndex === targetListIndex)
                return;

            moveList(draggedListIndex, targetListIndex, draggedIndex);
            //sepá move

            item.listIndex = targetListIndex;
            item.index = lastIndex;

        }
    });

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

            <ul ref={dropRef}>
                { data.cards.map( (card, index) => (card && <Card key={card.id} listIndex={listIndex} index={index} data={card} />) )}
            </ul>
        </Container>
    );
}

export default List;