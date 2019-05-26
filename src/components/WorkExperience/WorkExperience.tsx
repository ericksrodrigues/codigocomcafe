import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Experience } from '../../utils/customTypes';
import ListDisplay from '../../hoc/ListDisplay/ListDisplay';
import './WorkExperience.scss';

interface IProps {
    experiences?: Experience[]
}

interface IState {

}
{/* <div className="experience" data-test="params" key={`task ${experience_i}`}>
    <p className="experience__job">{experience.job_name}</p>
    <p className="experience__rule">{experience.rule}</p>
    <p className="experience__period">{experience.start_date} - {experience.end_date}</p>                                        
    {
        experience.tasks.map((task, task_i) => (
            <p className="experience__task" key={`task ${task_i}`}>{task}</p>
        ))
    }
</div> */}
class WorkExperience extends Component<IProps, IState> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Experiência Profissional</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            (this.props.experiences) ? (
                                this.props.experiences.map((experience, experience_i) => (
                                    <ListDisplay 
                                        informations={{
                                            list_name: "work_experience",
                                            elements: [
                                                {
                                                    job_name: "Celpe", 
                                                    rule: "Fullstack Developer", 
                                                    date: "2013-01-1 à 2014-01-01", 
                                                    tasks: (
                                                        <div>
                                                            <p>Desenvolvimento de dashboards</p>
                                                            <p>Automação de geração de relatórios</p>
                                                        </div>
                                                    )
                                                }
                                            ],
                                            field_levels: [
                                                {name: "job_name", level: 1},
                                                {name: "rule", level: 1},
                                                {name: "date", level: 1},
                                                {name: "tasks", level: 1},
                                            ]
                                        }}
                                    />
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