//ModalComponent.js
import React from 'react';
import {Badge} from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Aux from "../../hoc/_Aux";
class ModalComponent extends React.Component {

    state = {
        modal: false};

    toggle = this.toggle.bind(this);



    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (

            <Aux>
                <Badge variant="primary" size="sm" onClick={this.toggle}>View</Badge>
                <Modal isOpen={this.state.modal} size="lg">
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader>{this.props.header}</ModalHeader>
                        <ModalBody>
                            {this.props.children}
                        </ModalBody>
                        <ModalFooter>
                            {/* <input type="submit" value="Submit" color="primary" className="btn btn-primary btn-sm" /> */}
                            <Button color="danger" size="sm" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </Aux>

        );
    }
}

export default ModalComponent;