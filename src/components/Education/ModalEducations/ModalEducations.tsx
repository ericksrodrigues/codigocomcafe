import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Education } from '../../../utils/customTypes';

interface IProps {
    educations: Education[]
}

const ModalEducations: React.FC<IProps> = (props) => (
    <Container fluid>
        <Row>
            <Col>
                
            </Col>
        </Row>
    </Container>
);

export default ModalEducations;