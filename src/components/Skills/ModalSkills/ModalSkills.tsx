import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';

interface IProps {
    username: string,
    skills: Array<{ skill: string, level: "beginner" | "basic" | "intermediate" | "advanced" }>;
}
interface IState {
    skills: Array<{ skill: string, level: "beginner" | "basic" | "intermediate" | "advanced" }>;
    newSkills: { skill: string, level: "beginner" | "basic" | "intermediate" | "advanced" };
}

const mapperSkill = {
    'beginner': 'Iniciante',
    'basic': "Básico",
    'intermediate': "Intermediário",
    'advanced': "Avançado",
}

class ModalSkills extends Component<IProps, IState>{

    componentWillMount() {
        const { skills } = this.props;
        this.setState({
            skills,
            newSkills: {
                skill: "",
                level: "beginner"
            }
        });
    }


    addSkillHandler = (): void => {
        if (this.state.newSkills.skill !== '') {
            this.setState({
                skills: [...this.state.skills, this.state.newSkills],
                newSkills: {
                    skill: "",
                    level: "basic"
                }
            });
        }
    }

    removeSkillHandler = (skill: { skill: string, level: "beginner" | "basic" | "intermediate" | "advanced" }): void => {
        this.setState({
            skills: this.state.skills.filter(stateSkill => stateSkill !== skill)
        });
    }

    changeSkillTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        this.setState({
            newSkills: {
                ...this.state.newSkills,
                skill: value
            }
        });
    }

    changeLevelHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value as "beginner" | "basic" | "intermediate" | "advanced";
        this.setState({
            newSkills: {
                ...this.state.newSkills,
                level: value
            }
        });
    }

    public render() {
        const { skills, newSkills } = this.state;
        return (
            
            <Form>
                <FormGroup>
                    <Label for="skill">Habilidade:</Label>
                    <Input type="text" id="skill" onChange={this.changeSkillTextHandler} value={newSkills.skill} />
                    <Label for="level">Nível</Label>
                    <Input type="select" id="level" onChange={this.changeLevelHandler} value={newSkills.level}>
                        <option value="beginner">Iniciante</option>
                        <option value="basic">Básico</option>
                        <option value="intermediate"> Intermediário </option>
                        <option value="advanced"> Avançado </option>
                    </Input>
                    <br />
                    <Button color="primary" id="add_skill" size="lg" block onClick={() => this.addSkillHandler()}>Adicionar</Button>
                    <br />
                </FormGroup>
                <Container>
                    {
                        skills.map(skill => (
                            <Row className="skill-row" key={skill.skill}>
                                <Col>{skill.skill}</Col>
                                <Col>{mapperSkill[skill.level]}</Col>
                                <Col><Button color="danger" onClick={() => this.removeSkillHandler(skill)}>Remover</Button></Col>
                            </Row>
                        ))
                    }
                </Container>
            </Form>
        )
    }

}

export default ModalSkills;