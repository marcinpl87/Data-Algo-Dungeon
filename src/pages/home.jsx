import React from 'react';
import Card from 'react-bootstrap/Card';
import Task from '../../tasks/fibonacci?raw'
import Accordion from '../components/accordion';
import CodingQuiz from '../components/coding-quiz';

const items = [{
    img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086756920725098496/mpl_ReactJS_has_advantages_of_ability_to_handle_complex_user_in_c9a15a85-616b-4b93-9338-f8641e5c4c2d.png',
    title: 'Advantages and Disadvantages of React',
    content: () => (<Card.Text>Advantages of React include its ability to handle complex user interfaces, its flexibility and reusability of components, and its performance optimization through the use of a virtual DOM. Disadvantages include a steep learning curve for beginners and the need for additional libraries or tools to complete a full-featured application.</Card.Text>),
    connection: 'this helps understand React advantages',
}, {
    img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086756920725098496/mpl_ReactJS_has_advantages_of_ability_to_handle_complex_user_in_c9a15a85-616b-4b93-9338-f8641e5c4c2d.png',
    title: 'What is Virtual DOM?',
    content: () => (<Card.Text>Virtual DOM is a lightweight in-memory representation of the actual DOM (Document Object Model). It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.</Card.Text>),
    connection: 'this helps answer the most popular interview question',
}, {
    img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086761490348003459/mpl_artistic_high_quality_visualization_of_fibonacci_sequence_a_fb14e18b-313f-454a-96b8-122d2d13bf2f.png',
    title: 'Fibonacci Sequence (recursive algorithm)',
    content: () => (<CodingQuiz task={Task} />),
    connection: false,
}];

export default () => (
    <Accordion items={items} />
);
