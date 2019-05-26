import React from 'react';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import { Progress } from 'reactstrap';
import ModalLanguages from './ModalLanguages/ModalLanguages';
import Card from '../../hoc/Card/Card';
import './Languages.scss';

interface IProps {
    languages: Array<{ language: string, level: "basic" | "intermediate" | "advanced" | "fluent" }>;
    username: string;
    onUpdate: () => void;
    authenticated?: boolean;
}

const mapLevel = {
    basic: { text: "Básico", value: 25 },
    intermediate: { text: "Intermediário", value: 50 },
    advanced: { text: "Avançado", value: 75 },
    fluent: { text: "Fluente", value: 100 }
}

const languages: React.FC<IProps> = props => (
    <Card title="Idiomas">

        {props.languages.map(language => (
            <div className="languages" key={language.language}>
                <div className="text_language">{language.language + " " + mapLevel[language.level].text}</div>
                <Progress value={mapLevel[language.level].value} />
                <div />
            </div>
        ))}
        <br />
        {props.authenticated ? <ModalUpdate onSubmitHandler={props.onUpdate} title="Alterar Idiomas">
            <ModalLanguages languages={props.languages} username={props.username} />
        </ModalUpdate> : null
        }
    </Card>
);

export default languages;