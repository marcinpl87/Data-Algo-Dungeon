import React from 'react';
import Card from 'react-bootstrap/Card';
import Questions from '../../tasks/react?raw';
import Accordion from '../components/accordion';

export default () => (
    <Accordion items={
        JSON.parse(Questions).map((item) => {
            return {
                ...item,
                img: 'https://cdn.discordapp.com/attachments/989739733993263114/1086756920725098496/mpl_ReactJS_has_advantages_of_ability_to_handle_complex_user_in_c9a15a85-616b-4b93-9338-f8641e5c4c2d.png',
                content: () => (<Card.Text className="p-3">
                    {item.content}
                </Card.Text>),
            };
        })
    } />
);
