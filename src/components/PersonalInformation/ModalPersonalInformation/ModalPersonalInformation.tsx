import React from 'react';

interface IProps {
    username: string,
}

const modalPersonalInformation: React.FC<IProps> = (props) => (
    <div>
        {props.username}
    </div>
);

export default modalPersonalInformation;