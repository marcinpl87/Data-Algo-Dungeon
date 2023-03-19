import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export default ({items}) => (
    <Accordion defaultActiveKey="0" flush className="border-bottom">
        {items.map((el, key) => {
            const Content = el.content;
            return (<Accordion.Item eventKey={key} key={key}>
                <Accordion.Header>
                    {key + 1}) {el.title}
                </Accordion.Header>
                <Accordion.Body className="p-0">
                    <Card className="rounded-0 border-bottom-0">
                        <Card.Img variant="top" className="rounded-0" src={el.img} />
                        <Card.Body>
                            <Content />
                        </Card.Body>
                        {
                            el.connection && <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <span className="fw-bold">
                                        Connection:
                                    </span> {el.connection}
                                </ListGroup.Item>
                            </ListGroup>
                        }
                    </Card>
                </Accordion.Body>
            </Accordion.Item>);
        })}
    </Accordion>
);
