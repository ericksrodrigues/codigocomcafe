import React, { Component, Children } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IProps {
    onSubmitHandler: () => void,
}

interface IState {
    modal: Boolean
}

class ModalUpdate extends Component<IProps, IState> {

    state = {
        modal: false
    }

    toggle = (): void => {
        this.setState({ modal: !this.state.modal })
    }

    public onSuccess = (): void => {
        this.props.onSubmitHandler();
        this.toggle();
    }

    public render() {
        const { children } = this.props;
        return (
            <>
                <Button color="primary" onClick={this.toggle}>Alterar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSuccess}>Atualizar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default ModalUpdate;