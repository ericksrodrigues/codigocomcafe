import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Education } from '../../utils/customTypes';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import ModalEducations from './ModalEducations/ModalEducations';
import './Educations.scss';

interface IProps {
    educations?: Education[]
}

interface IState {
    
}

class Educations extends Component<IProps, IState> {

    onSubmithandler = (): void => {

    }

    public render() {
        
        return (
            <Container fluid>
                <Row>
                    <Col><h2>Educação</h2></Col>
                    <Col>
                        <ModalUpdate title="Adicionar nova educação" onSubmitHandler={this.onSubmithandler}>
                            {/* <ModalEducations /> */}
                        </ModalUpdate>
                    </Col>
                </Row>
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