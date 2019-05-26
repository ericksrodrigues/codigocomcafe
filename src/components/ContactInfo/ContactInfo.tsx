import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { 
    IoIosMail,
    IoIosPhonePortrait,
    IoMdHome,
    IoIosContacts
} from 'react-icons/io';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import ModalContactInfo from './ModalContactInfo/ModalContactInfo';

interface IProps {
    email?: string;
    phone_number?: string;
    address?: string;
    social_media?: string;
    authenticated?: boolean;
}

class ContactInfo extends Component<IProps> {

    state = {
        modal: false
    }

    updateHandler = (): void => {
        //todo
    }

    public render () {
        return (
            <Container data-test='contact-info'>
                <Row className="contact-info">
                    <Col><span data-test="params"><IoIosMail /> {this.props.email}</span></Col>
                    <Col><span data-test="params"><IoIosPhonePortrait /> {this.props.phone_number}</span></Col>
                    <Col><span data-test="params"><IoMdHome /> {this.props.address}</span></Col>
                    <Col><span data-test="params"><IoIosContacts />{this.props.social_media}</span></Col>
                    {this.props.authenticated ? (
                        <ModalUpdate title="Informações de Contato" onSubmitHandler={this.updateHandler}>
                            <ModalContactInfo />
                        </ModalUpdate>
                    ) : null}
                </Row>
            </Container>
        );
    }
};

export default ContactInfo;