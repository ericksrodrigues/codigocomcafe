import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import user_image from '../../assets/user-image.png';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import './Resume.scss';

interface IProps {

}

interface IState {

}

class Resume extends Component<IProps, IState> {

    public render() {
        return (
            <Container fluid>

                <Row className='resume__header'>

                    <Col>

                        <Container fluid>

                            <Row className="user">
                                <Col className="user__image" xs="2">
                                    <img src={user_image} alt="user-image" width={100} />
                                </Col>
                                <Col className="user__description" xs="9">
                                    <PersonalInformation
                                        authenticated
                                        username="user"
                                        name="Ericks Rodrigues"
                                        resume="Eu sou Ericks."
                                        job="Analista de BI"
                                    />
                                </Col>
                            </Row>

                        </Container>

                    </Col>

                </Row>

                <Row className='resume__contact'>

                    <Col>
                        <p>Contact information</p>
                    </Col>

                </Row>

                <Row className="resume__content">

                    <Col>
                        <p>Experience & description</p>
                    </Col>

                    <Col>
                        <p>
                            Skills and levels
                        </p>
                    </Col>

                </Row>

            </Container>
        );
    }

}

export default Resume;