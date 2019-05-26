import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';

interface IProps {
    username: string,
    languages: Array<{ language: string, level: "basic" | "intermediate" | "advanced" | "fluent" }>;
}
interface IState {
    languages: Array<{ language: string, level: "basic" | "intermediate" | "advanced" | "fluent" }>;
    newLanguage: { language: string, level: "basic" | "intermediate" | "advanced" | "fluent" };
}

const mapperLanguage = {
    'basic': "Básico",
    'intermediate': "Intermediário",
    'advanced': "Avançado",
    'fluent': "Fluente"
}

class ModalLanguages extends Component<IProps, IState>{

    componentWillMount() {
        const { languages } = this.props;
        this.setState({
            languages,
            newLanguage: {
                language: "",
                level: "basic"
            }
        });
    }


    addLanguageHandler = (): void => {
        if (this.state.newLanguage.language !== '') {
            this.setState({
                languages: [...this.state.languages, this.state.newLanguage],
                newLanguage: {
                    language: "",
                    level: "basic"
                }
            });
        }
    }

    removeLanguageHandler = (language: { language: string, level: "basic" | "intermediate" | "advanced" | "fluent" }): void => {
        this.setState({
            languages: this.state.languages.filter(stateLanguage => stateLanguage !== language)
        });
    }

    changeLanguageTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        this.setState({
            newLanguage: {
                ...this.state.newLanguage,
                language: value
            }
        });
    }

    changeLevelHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value as "basic" | "intermediate" | "advanced" | "fluent";
        this.setState({
            newLanguage: {
                ...this.state.newLanguage,
                level: value
            }
        });
    }

    public render() {
        const { languages, newLanguage } = this.state;
        return (
            <Form>
                <FormGroup>
                    <Label for="language">Idioma:</Label>
                    <Input type="text" id="language" onChange={this.changeLanguageTextHandler} value={newLanguage.language} />
                    <Label for="level">Nível</Label>
                    <Input type="select" id="level" onChange={this.changeLevelHandler} value={newLanguage.level}>
                        <option value="basic">Básico</option>
                        <option value="intermediate"> Intermediário </option>
                        <option value="advanced"> Avançado </option>
                        <option value="fluent"> Fluente</option>
                    </Input>
                    <br />
                    <Button color="primary" id="add_language" size="lg" block onClick={() => this.addLanguageHandler()}>Adicionar</Button>
                    <br />
                </FormGroup>
                <Container>
                    {
                        languages.map(language => (
                            <Row className="language-row" key={language.language}>
                                <Col>{language.language}</Col>
                                <Col>{mapperLanguage[language.level]}</Col>
                                <Col><Button color="danger" onClick={() => this.removeLanguageHandler(language)}>Remover</Button></Col>
                            </Row>
                        ))
                    }
                </Container>
            </Form>
        )
    }

}

export default ModalLanguages;