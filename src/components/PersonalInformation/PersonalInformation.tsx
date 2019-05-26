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

interface IState {
    modal: Boolean
}

class PersonalInformation extends Component<IProps, IState> {

    state = {
        modal: false
    }

    updateHandler = (): void => {
        //todo
    }

    public render() {
        const { authenticated, name, job, resume, username } = this.props;
        return (
            <div>

                <span data-test="params">{name}</span>
                <span data-test="params">{job}</span>
                <span data-test="params">{resume}</span>
                {authenticated ? (
                    <ModalUpdate onSubmitHandler={this.updateHandler}>
                        <ModalPersonalInformation username={username} />
                    </ModalUpdate>) : null}
            </div>
        )
    }
}

export default PersonalInformation;