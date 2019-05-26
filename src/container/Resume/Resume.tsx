import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import user_image from '../../assets/user-image.png';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import './Resume.scss';
import Languages from '../../components/Languages/Languages';

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
                        <ContactInfo 
                            authenticated
                            email="dummy@gmail.com" 
                            address="Recife Pernambuco" 
                            social_media="facebook.com" 
                            phone_number="99388-2223"
                        />
                    </Col>

                </Row>

                <Row className="resume__content">

                    <Col>
                        <h2>Experiência Profissional</h2>
                        <WorkExperience 
                            experiences={[
                                {
                                    job_name: 'Celpe', rule: 'Dev. Fullstack', start_date: '2015-04-24', end_date: '2018-04-07', tasks: [
                                        'Desenvolvimento de paineis e dashboards',
                                        'Automação de relatórios',
                                        'Supporte de manuntenção',
                                        'Criação de Projetos Inovadores P&D'
                                    ]                            
                                },
                                {
                                    job_name: 'Fábrica de Negócio', rule: 'Dev. Fullstack', start_date: '2018-05-03', end_date: '', tasks: [
                                        'Desenvolvimento de paineis e dashboards',
                                        'Automação de relatórios',
                                        'Supporte de manuntenção',
                                        'Criação de Projetos Inovadores P&D'
                                    ]                            
                                }
                            ]}
                        />
                    </Col>

                    <Col>
                        <p>
                            <Languages
                            onUpdate={() => {
                                //todo: função de atualização
                            }}
                            languages={[
                                {
                                    language: "Inglês",
                                    level: "intermediate"
                                }
                            ]} />
                        </p>
                    </Col>

                </Row>

            </Container>
        );
    }

}

export default Resume;