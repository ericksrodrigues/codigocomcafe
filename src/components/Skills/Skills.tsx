import React from 'react';
import ModalUpdate from '../../hoc/ModalUpdate/ModalUpdate';
import { Progress } from 'reactstrap';
import ModalSkills from './ModalSkills/ModalSkills';

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
    <div>
        {props.authenticated ? <ModalUpdate onSubmitHandler={props.onUpdate} title="Alterar Idiomas">
            <ModalSkills skills={props.skills} username={props.username} />
        </ModalUpdate> : null
        }
        <h2>Habilidades</h2>
        {props.skills.map(skill => (
            <div className="skills" key={skill.skill}>
                <div className="text-center">{skill.skill + " " + mapLevel[skill.level].text}</div>
                <Progress value={mapLevel[skill.level].value} />
                <div />
            </div>
        ))}
    </div>
);

export default skills;