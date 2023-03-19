import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableListElement from './element';

export default ({dropId, data, showIcons}) => (
    <Droppable droppableId={dropId}>
        {(provided, snapshot) => (
            <ul
                ref={provided.innerRef}
                className={
                    snapshot.isDraggingOver
                        ? 'mb-0 dragging-over'
                        : 'mb-0'
                    }
            >
                {data.map((item, index) => (
                    <DraggableListElement
                        key={item.id}
                        item={item}
                        index={index}
                        showIcons={showIcons}
                    />
                ))}
                {provided.placeholder}
            </ul>
        )}
    </Droppable>
);
