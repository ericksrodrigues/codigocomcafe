import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Educations.scss';

type Education = {course: string, institution: string, start_date: string, end_date: string}

interface IProps {
    educations?: Education[]
}

interface IState {

}

class Educations extends Component<IProps, IState> {

    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {
                            this.props.educations ? (
                                this.props.educations.map((education, education_i) => (
                                    <div key={`edu${education_i}`} className="education" data-test="params">
                                        <p className="education__course">{education.course}</p>
                                        <p className="education__institution">{education.institution}</p>
                                        <p className="education__period">{education.start_date} - {education.end_date}</p>                                        
                                    </div>
                                ))
                            ) : null
                        }
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Educations;