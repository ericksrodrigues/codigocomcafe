import React, { Component } from 'react';
import ModalPersonalInformation from './ModalPersonalInformation/ModalPersonalInformation';
import { Button } from 'reactstrap';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';

interface IProps {
    name?: string,
    job?: string,
    resume?: string,
    authenticated?: Boolean,
    username: string,
}



class PersonalInformation extends Component<IProps> {

    updateHandler = (): void => {
        //todo
    }

    public render() {
        const { authenticated, name, job, resume, username } = this.props;
        return (
            <div>
                <h1 data-test="params">{name}</h1>
                <h2 data-test="params">{job}</h2>
                <p data-test="params">{resume}</p>
                {authenticated ? (
                    <ModalUpdate title="Atualizar Informações Pessoais" onSubmitHandler={this.updateHandler}>
                        <ModalPersonalInformation username={username} />
                    </ModalUpdate>) : null}
            </div>
        )
    }
}

export default PersonalInformation;