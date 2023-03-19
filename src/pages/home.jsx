import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from '../components/accordion';

const items = [{
    title: 'Advantages and Disadvantages of React',
    content: 'Advantages of React include its ability to handle complex user interfaces, its flexibility and reusability of components, and its performance optimization through the use of a virtual DOM. Disadvantages include a steep learning curve for beginners and the need for additional libraries or tools to complete a full-featured application.',
    connection: 'this helps understand React advantages',
}, {
    title: 'What is Virtual DOM?',
    content: 'Virtual DOM is a lightweight in-memory representation of the actual DOM (Document Object Model). It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.',
    connection: 'this helps answer the most popular interview question',
}];

export default () => (
    <Accordion items={
        items.map((item) => {
            return {
                img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086756920725098496/mpl_ReactJS_has_advantages_of_ability_to_handle_complex_user_in_c9a15a85-616b-4b93-9338-f8641e5c4c2d.png',
                title: item.title,
                content: () => (<Card.Text>{item.content}</Card.Text>),
                connection: item.connection,
            }
        })
    } />
);
