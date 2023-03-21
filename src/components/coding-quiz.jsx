import React from 'react';
import DragAndDrop from './drag-and-drop';
import CodeFormatter from './drag-and-drop/code-formatter';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default ({task}) => {
    const DragAndDropFormated = CodeFormatter(DragAndDrop);
    const linesArray = [
        ...task,
        ...task,
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
        <Tabs
            id="my-tabs"
            className="ps-3 pt-3"
        >
            <Tab eventKey="home" title="Drag & drop">
        <div className="drag-and-drop">
            <DragAndDropFormated
                        data={[
                            linesArray,
                            []
                        ]}
                        onDrag={(data) => {
                            if (
                                data.map(({content}) => content.trim()).join('')
                                === task.map(el => el.trim()).join('')
                            ) {
                                alert('CONGRATZ! 🎉🥳👏🎊✨🙌🤩🥂');
                            }
                        }}
            />
        </div>
            </Tab>
            <Tab eventKey="solution" title="Solution">
                <div className="p-3 code-quiz-solution">
                    {task.map((line, key) => (
                        <p className="m-0" key={key}>
                            {line}
                        </p>
                    ))}
                </div>
            </Tab>
        </Tabs>
    );
};
