import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { 
    IoIosMail,
    IoIosPhonePortrait,
    IoMdHome,
    IoIosContacts
} from 'react-icons/io';

interface IProps {
    email?: string;
    phone_number?: string;
    address?: string;
    social_media?: string;
}

const ContactInfo: React.FC<IProps> = (props) => (
    <Container data-test='contact-info'>
        <Row className="contact-info">
            <Col><span data-test="params"><IoIosMail /> {props.email}</span></Col>
            <Col><span data-test="params"><IoIosPhonePortrait /> {props.phone_number}</span></Col>
            <Col><span data-test="params"><IoMdHome /> {props.address}</span></Col>
            <Col><span data-test="params"><IoIosContacts />{props.social_media}</span></Col>
        </Row>
    </Container>
);

export default ContactInfo;