import React from 'react';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import { Progress } from 'reactstrap';
import ModalSkills from './ModalSkills/ModalSkills';
import Card from '../../hoc/Card/Card';
import './Skills.scss';
interface IProps {
    skills: Array<{ skill: string, level: "beginner" | "basic" | "intermediate" | "advanced" }>;
    username: string;
    onUpdate: () => void;
    authenticated?: boolean;
}

const mapLevel = {
    beginner: { text: "Iniciante", value: 25 },
    basic: { text: "Básico", value: 50 },
    intermediate: { text: "Intermediário", value: 75 },
    advanced: { text: "Avançado", value: 100 }
}

const skills: React.FC<IProps> = props => (
    <Card title="Habilidades">

        {props.skills.map(skill => (
            <div className="skills" key={skill.skill}>
                <div className="text_skill">{skill.skill + " " + mapLevel[skill.level].text}</div>
                <Progress value={mapLevel[skill.level].value} />
                <div />
            </div>
        ))}
        <br />
        {props.authenticated ? <ModalUpdate onSubmitHandler={props.onUpdate} title="Alterar Idiomas">
            <ModalSkills skills={props.skills} username={props.username} />
        </ModalUpdate> : null
        }
    </Card>
);

export default skills;