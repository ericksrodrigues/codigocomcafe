import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InfoList, Field } from '../../utils/customTypes';
import './ListDisplay.scss';

interface IProps {
    informations?: InfoList
}

const renderElementByLevel = (content: string | JSX.Element, level: number, info_name: string): JSX.Element => {
    let levelName: string = "";

    switch (level) {
        case 1: levelName = "info-level-one"; break;
        case 2: levelName = "info-level-two"; break;            
        case 3: levelName = "info-level-three"; break; 
        case 4: levelName = "info-level-four"; break;
    }

    return <p key={`info_content_${info_name}`}className={levelName}>{content}</p>
}

const getFieldLevel = (field_levels: Field[], field_name: string): number => {
    return field_levels.filter(level => level.name === field_name)[0].level;
}

const ListDisplay: React.FC<IProps> = (props) => {

    let info_name = props.informations ? props.informations.list_name : "";
    let elements = props.informations ? props.informations.elements : [];
    let field_levels = props.informations ? props.informations.field_levels : [];

    return (
        <Container fluid>
            <Row>
                <Col>
                    {
                        elements.map((info, index) => (
                            <div key={`${info_name}_${index}`} className="info-container">
                                {
                                    Object.keys(info).map((key_name) => 
                                        renderElementByLevel(info[key_name], getFieldLevel(field_levels, key_name), info_name)
                                    )
                                }
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ListDisplay
