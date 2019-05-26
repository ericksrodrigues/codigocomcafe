import React, { Component, Children } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUpdate.scss';
interface IProps {
    onSubmitHandler: () => void,
    title: string
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
        const { children, title } = this.props;
        return (
            <>
                <Button color="primary" onClick={this.toggle}>Alterar</Button>
                <Modal size="lg" className="modal_update" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
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