import React from 'react';
import ModalPersonalInformation from './ModalPersonalInformation/ModalPersonalInformation';

interface IProps {
    name?: string,
    job?: string,
    resume?: string,
    authenticated?: boolean,
    username: string,
}

const personalInformation: React.FC<IProps> = (props) => (
    <div>
        {props.authenticated ? <ModalPersonalInformation username={props.username} /> : null}
        <span data-test="params">{props.name}</span>
        <span data-test="params">{props.job}</span>
        <span data-test="params">{props.resume}</span>
        {props.authenticated ? <button data-test="update-button">Alterar</button> : null}
    </div>
)

export default personalInformation;