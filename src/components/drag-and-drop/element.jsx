import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaGripVertical } from 'react-icons/fa';

export default ({item, index, showIcons}) => (
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
                {showIcons && <FaGripVertical />}
                {item.content}
            </li>
        )}
    </Draggable>
);
