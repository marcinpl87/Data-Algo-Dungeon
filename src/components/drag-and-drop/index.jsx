import React, {
    useState,
    useEffect,
} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableList from './list';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const move = (data, sourceName, destinationName, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(data[sourceName]);
    const destClone = Array.from(data[destinationName]);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    return {
        [sourceName]: sourceClone,
        [destinationName]: destClone,
    };
};

export default ({data, onDrag, onBeforeDrop}) => {
    const [
        lists,
        setLists,
    ] = useState({
        'arr-drop-1': data[0],
        'arr-drop-2': data[1]
    });
    useEffect(
        () => {
            onDrag(lists[Object.values(id2List)[1]]);
        },
        [lists]
    );
    const id2List = {
        'id-drop-1': 'arr-drop-1',
        'id-drop-2': 'arr-drop-2',
    };
    const onBeforeListsUpdate = data => {
        if (typeof(onBeforeDrop) === 'function') {
            return onBeforeDrop(data);
        }
        else {
            return data;
        }
    };
    const getList = id => lists[id2List[id]];
    const onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) {
            // dropped outside the list
            return;
        }
        if (source.droppableId === destination.droppableId) {
            // dropped in the same list
            lists[id2List[source.droppableId]] = reorder(
                lists[id2List[source.droppableId]],
                source.index,
                destination.index
            );
            setLists(
                onBeforeListsUpdate(
                    {...lists}
                )
            );
        } else {
            // dropped in a different list
            setLists(
                onBeforeListsUpdate(
                    move(
                        lists,
                        id2List[source.droppableId],
                        id2List[destination.droppableId],
                        source,
                        destination
                    )
                )
            );
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DraggableList
                dropId="id-drop-1"
                data={lists['arr-drop-1']}
                showIcons={true}
            />
            <DraggableList
                dropId="id-drop-2"
                data={lists['arr-drop-2']}
                showIcons={false}
            />
        </DragDropContext>
    );
};
