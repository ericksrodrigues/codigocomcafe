import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './WorkExperience.scss';

type Experience = {job_name: string, rule: string, start_date: string, end_date: string, tasks: string[]};

interface IProps {
    experiences?: Experience[]
}

interface IState {

}

class WorkExperience extends Component<IProps, IState> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {
                            (this.props.experiences) ? (
                                this.props.experiences.map((experience, experience_i) => (
                                    <div className="experience" data-test="params" key={`task ${experience_i}`}>
                                        <p className="experience__job">{experience.job_name}</p>
                                        <p className="experience__rule">{experience.rule}</p>
                                        <p className="experience__period">{experience.start_date} - {experience.end_date}</p>                                        
                                        {
                                            experience.tasks.map((task, task_i) => (
                                                <p className="experience__task" key={`task ${task_i}`}>{task}</p>
                                            ))
                                        }
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

export default WorkExperience;