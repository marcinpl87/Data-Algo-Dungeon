import React from 'react';
import DragAndDrop from './components/drag-and-drop';
import CodeFormatter from './components/drag-and-drop/code-formatter';
import Task from '../tasks/fibonacci?raw'

const DragAndDropFormated = CodeFormatter(DragAndDrop);
const linesArray = [
    ...Task.split('\n'),
    ...Task.split('\n'),
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

export default () => (
    <div className="drag-and-drop">
        <DragAndDropFormated
            data={[
                linesArray,
                []
            ]}
            onDrag={(data) => {
                if (
                    data.map(({content}) => content.trim()).join('')
                    === Task.split('\n').map(el => el.trim()).join('')
                ) {
                    alert('CONGRATZ! 🎉🥳👏🎊✨🙌🤩🥂');
                }
            }}
        />
    </div>
);
