import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

interface IProps {
    username: string,
    name?: string,
    job?: string,
    resume?: string
}
interface IState {
    name?: string,
    job?: string,
    resume?: string
}

class ModalPersonalInformation extends Component<IProps, IState>{

    componentWillMount() {
        const { name, job, resume } = this.props;
        this.setState({
            name, job, resume
        });
    }

    changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        this.setState({
            name: value
        });
    }
    changeJobHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        this.setState({
            job: value
        });
    }
    changeResumeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        this.setState({
            resume: value
        });
    }

    public render() {
        const { name, job, resume } = this.state;
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Nome:</Label>
                    <Input type="text" id="name" onChange={this.changeNameHandler} value={name} />
                    <Label for="job">Profissão:</Label>
                    <Input type="text" id="job" onChange={this.changeJobHandler} value={job} />
                    <Label for="resume">Resumo:</Label>
                    <Input type="textarea" id="resume" onChange={this.changeResumeHandler} value={resume} />
                </FormGroup>
            </Form>
        )
    }

}

export default ModalPersonalInformation;