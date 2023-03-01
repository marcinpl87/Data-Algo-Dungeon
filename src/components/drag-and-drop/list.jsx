import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableListElement from './element';

export default ({dropId, data}) => (
    <Droppable droppableId={dropId}>
        {(provided, snapshot) => (
            <ul
                ref={provided.innerRef}
                className={
                    snapshot.isDraggingOver
                        ? 'dragging-over'
                        : ''
                    }
            >
                {data.map((item, index) => (
                    <DraggableListElement
                        key={item.id}
                        item={item}
                        index={index}
                    />
                ))}
                {provided.placeholder}
            </ul>
        )}
    </Droppable>
);
