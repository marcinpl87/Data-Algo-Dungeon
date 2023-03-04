import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableList from './list';

export default (WrappedComponent) => {
    const autoFormatCode = (codeLines, indentationSpaces = 4) => {
        let indentationLevel = 0;
        const formattedCodeLines = codeLines.map((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine.endsWith('{') || trimmedLine.endsWith('(') || trimmedLine.endsWith('[')) {
                const indentedLine = ' '.repeat(indentationLevel * indentationSpaces) + trimmedLine;
                indentationLevel++;
                return indentedLine;
            } else if (trimmedLine.startsWith('}') || trimmedLine.startsWith(')') || trimmedLine.startsWith(']')) {
                indentationLevel = Math.max(0, indentationLevel - 1);
                const indentedLine = ' '.repeat(indentationLevel * indentationSpaces) + trimmedLine;
                return indentedLine;
            } else {
                const indentedLine = ' '.repeat(indentationLevel * indentationSpaces) + trimmedLine;
                return indentedLine;
            }
        });
        return formattedCodeLines;
    }
    return (props) => (
        <WrappedComponent
            onBeforeDrop={(data) => {
                const noIndentArr = data[
                    Object.keys(data)[1]
                ].map(
                    ({content}) => content
                );
                autoFormatCode(noIndentArr).map((indentedContent, i) => {
                    data[Object.keys(data)[1]][i].content = indentedContent;
                });
                return data;
            }}
            {...props}
        />
    );
};
