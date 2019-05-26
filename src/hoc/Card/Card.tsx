import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import './Card.scss';

interface IProps {
    title: string
}

const card: React.FC<IProps> = props => (
    <Card body color="warning" className="card">
        <CardTitle><h2>{props.title}</h2></CardTitle>
        <CardText>{props.children}</CardText>
    </Card>
)

export default card;