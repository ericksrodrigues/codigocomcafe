import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import './ModalContactInfo.scss';

const ModalContactInfo: React.FC = (props) => (
    <Container>
        <Row className="contact-info__input">
            <Col>
                <Input placeholder="E-mail" />
            </Col>
        </Row>
        <Row className="contact-info__input">
            <Col>
                <Input placeholder="Telefone" />
            </Col>
        </Row>
        <Row className="contact-info__input">
            <Col>
                <Input placeholder="Endereço" />
            </Col>
        </Row>
        <Row className="contact-info__input">
            <Col>
                <Input placeholder="Mídia Social" />
            </Col>
        </Row>
    </Container>
);

export default ModalContactInfo;