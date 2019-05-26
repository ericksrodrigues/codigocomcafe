import React from 'react';
import { Container, Row, Col } from 'reactstrap';

interface IProps {
    email?: string;
    phone_number?: string;
    address?: string;
    social_media?: string;
}

const ContactInfo: React.FC<IProps> = (props) => (
    <div data-test='contact-info'>
        <span data-test="params">Email</span>
        <span data-test="params">Telefone</span>
        <span data-test="params">Endereço</span>
        <span data-test="params">Social Midia</span>
    </div>
);

export default ContactInfo;