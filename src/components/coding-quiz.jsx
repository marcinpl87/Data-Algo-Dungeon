import React from 'react';
import DragAndDrop from './drag-and-drop';
import CodeFormatter from './drag-and-drop/code-formatter';

export default ({task}) => {
    const DragAndDropFormated = CodeFormatter(DragAndDrop);
    const linesArray = [
        ...task.split('\n'),
        ...task.split('\n'),
    ]
        .map(
            (el, i) => {
                return {
                    id: `item-${i}`,
                    content: el.trim(),
                }
            }
        )
        .sort(
            () => 0.5 - Math.random()
        );

    return (
        <div className="drag-and-drop">
            <DragAndDropFormated
                data={[
                    linesArray,
                    []
                ]}
                onDrag={(data) => {
                    if (
                        data.map(({content}) => content.trim()).join('')
                        === task.split('\n').map(el => el.trim()).join('')
                    ) {
                        alert('CONGRATZ! 🎉🥳👏🎊✨🙌🤩🥂');
                    }
                }}
            />
        </div>
    );
};
