import React, { Component, useRef, useContext } from 'react';
import { Container, Label } from './styles';
import avatar from '../../assets/avatar.jpg';

import { useDrag, useDrop } from 'react-dnd';
import BoardContext from './../Board/context';

const Card = ({data, index, listIndex }) => {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    //Drag
    const [{ isDragging }, dragRef ] = useDrag({
        item: { type: 'CARD', index: index, listIndex: listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    });

    //Drop
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {

            const draggedIndex = item.index;
            const targetIndex = index;

            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex)
                return;

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top)/2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if(draggedIndex < targetIndex && draggedTop < targetCenter)
                return;

            if(draggedIndex > targetIndex && draggedTop > targetCenter)
                return;

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    dragRef(dropRef(ref));
    

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label color={label} key={label}/>)}
            </header>
            <p>{ data.content }</p>
            {data.user && <img src={data.user} alt=""/>}
        </Container>
    );
    
}

export default Card;