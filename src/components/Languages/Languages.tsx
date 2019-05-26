import React from 'react';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';

interface IProps {
    languages: Array<{ language: string, level: "basic" | "intermediate" | "advanced" | "fluent" }>
    onUpdate: () => void;
}

const mapLevel = {
    basic: { text: "Básico", value: 25 },
    intermediate: { text: "Intermediário", value: 50 },
    advanced: { text: "Avançado", value: 75 },
    fluent: { text: "Fluente", value: 100 }
}

const languages: React.FC<IProps> = props => (
    <div>
        <ModalUpdate onSubmitHandler={props.onUpdate} title="Alterar Idiomas"></ModalUpdate>
    </div>
);

export default languages;