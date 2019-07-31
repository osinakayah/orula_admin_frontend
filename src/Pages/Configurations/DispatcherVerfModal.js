//DispatcherVerfModal.js
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Row, Col, Badge, Form, FormControl, Tabs, Tab,} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class DispatcherVerfModal extends React.Component {

    state = {
         modal: false};

    toggle = this.toggle.bind(this);



  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const personalInfo = (
            <Row>
              <Col>
                <Row>
                <Col md={6} className="mb-4">
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
                                <p className="m-b-0">daniel@orula.com.ng</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-right">
                                <h6 className="f-w-300 m-b-0">Home Address:</h6>
                            </div>

                            <div className="col-8 text-left">
                                <p className="m-b-0">56, Adekunle Street, off Borno way, Yaba Lagos.</p>
                            </div>
                        </div>
                        <div className="progress m-t-50" style={{height: '3px'}}>
                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                    <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Additional Info</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Date Of Birth:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">10/10/1981</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Nationality:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">Nigerian</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">State of Origin:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">Lagos</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Language:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">English</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">State of Origin:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">Lagos</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    </Col>

                    <Col md={6}>
                    <h6 className='mb-4'><i className="feather icon-users text-c-green f-20 m-r-5"/> Guarantor's Info</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Name:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">Samuel Oladele</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Phone:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">09031822677</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Valid ID No.:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">011711334899654</p>
                        </div>
                    </div>
                    <div className="progress m-t-50" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    </Col>

                    <Col md={6}>
                    <h6 className='mb-4'><i className="feather icon-briefcase text-c-green f-20 m-r-5"/> Bank Info</h6>
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
                            <h6 className="f-w-300 m-b-0">Bank Name:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">Gurantee Trust Bank</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Account No:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">0117899654</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-12 text-center">
                            <Button color="warning" type="button" size="sm">View Upload</Button>
                        </div>
                    </div>
                    <div className="progress m-t-10" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    </Col>   
                </Row>
              </Col>
          </Row>
    );

    const vehicleInfo = (
        <Row>
            <Col md={6}>
                <h6 className='mb-4'><i className="feather icon-map text-c-green f-20 m-r-5"/> Vehicle Info</h6>
                <div className="row d-flex align-items-center">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Vehicle Type:</h6>
                    </div>
                    <div className="col-8 text-left">
                        <p className="m-b-0">Bike</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Vehicle Name:</h6>
                    </div>

                    <div className="col-8 text-left">
                        <p className="m-b-0">Toyota Corolla 08</p>
                    </div>
                </div>

                <div className="row d-flex align-items-center">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Plate Number:</h6>
                    </div>

                    <div className="col-8 text-left">
                        <p className="m-b-0">ABJ087SMK</p>
                    </div>
                </div>
                <hr/>

                <div className="row d-flex align-items-center">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Branch:</h6>
                    </div>

                    <div className="col-8 text-left">
                        <p className="m-b-0">Abuja</p>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Valid Nigerian Driver’s License</Form.Label>
                    <Form.Control type="text" placeholder="Enter license number" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Amac Reg Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter amac number" />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>VIO Paper Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vio registration" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vehicle Registration Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle registration" />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Internal Notes</Form.Label>
                    <FormControl as="textarea" placeholder="Add additional information" rows="3" />
                </Form.Group>
            </Col>
        </Row>
    );

    return (

        <Aux>
            <Badge variant="primary" size="sm" onClick={this.toggle}>Verify</Badge>
            {/* <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1} onClick={this.toggle}>Claim</a> */}
            <Modal isOpen={this.state.modal} size="lg">
                <Form onSubmit={this.handleSubmit}>
                <ModalHeader>Verify A Dispatcher</ModalHeader>
                <ModalBody>
                    <p className="text-muted text-center">Switch between tabs to navigate</p>
                    <Tabs defaultActiveKey="personal" id="uncontrolled-tab-example" onSelect={this.onTabDifferentTabSelected}>
                    <Tab eventKey="personal" title="Personal Info">
                        {personalInfo}
                    </Tab>
                    <Tab eventKey="vehicle" title="Vehicle Info">
                        {vehicleInfo}
                    </Tab> 
                    </Tabs>  
                </ModalBody>
                <ModalFooter>
                    <input type="button" value="Verify" color="primary" className="btn btn-primary btn-sm" />
                    <Button color="danger" size="sm" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Form>
            </Modal>
        </Aux>
      
    );
  }
}

export default DispatcherVerfModal;