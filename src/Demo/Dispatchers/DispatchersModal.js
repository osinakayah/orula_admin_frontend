//DispatchersModal.js
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Row, Col, Card, Badge} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

class DispatchersModal extends React.Component {

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
        <a href={DEMO.BLANK_LINK}><Badge variant="warning" size="sm" onClick={this.toggle}>View</Badge></a>
        {/* <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1} onClick={this.toggle}>Claim</a> */}
        <Modal isOpen={this.state.modal} size="lg">
          <ModalHeader>Dispatcher's Detail</ModalHeader>
          <ModalBody>
          <Row>
              <Col>
                  <Card>
                    <Card.Header>
                        <Card.Title as="h5">Dispatcher's Information</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                        <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Dispatcher's Info</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Name:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Daniel Abayomi</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Phone:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">09031822660</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Email:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Dispatcher@orula.com.ng</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Branch:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Abuja</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Personal Info</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Address:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Block 18, Raman Close, Garki, Abuja</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Bank:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">First Bank</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Account:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">0116755601</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                        <Card.Title as="h5">Vehicle Info</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Vehicle Info</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Vehicle Type:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Toyota Camry '08</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Car Plate:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">ABJ001SMK</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Uploaded Documents:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <button type="button" className="btn btn-warning btn-sm">View Docs</button>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Additional Info</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Vehicle Type:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">Toyota Camry '08</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Car Plate:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">ABJ001SMK</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Car Plate:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">ABJ001SMK</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
              </Col>
          </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" size="sm" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </Aux>
      
    );
  }
}

export default DispatchersModal;