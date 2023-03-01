import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default ({item, index}) => (
    <Draggable
        draggableId={item.id}
        index={index}>
        {(provided, snapshot) => (
            <li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={provided.draggableProps.style}
                className={
                    snapshot.isDragging
                        ? 'dragging'
                        : ''
                }
            >
                {item.content}
            </li>
        )}
    </Draggable>
);
