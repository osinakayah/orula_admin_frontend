//VendorVerfModal.js
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Row, Col, Card, Badge, Form, FormControl} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class VendorVerfModal extends React.Component {

    state = {
         modal: false};

    toggle = this.toggle.bind(this);



  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // const btnstyle1 = {
    //     borderRadius: '15px',
    //   }

    return (

        <Aux>
        <Badge variant="primary" size="sm" onClick={this.toggle}>Verify</Badge>
        {/* <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1} onClick={this.toggle}>Claim</a> */}
        <Modal isOpen={this.state.modal} size="lg">
        <Form onSubmit={this.handleSubmit}>
          <ModalHeader>Verify A Vendor</ModalHeader>
          <ModalBody>
          <Row>
              <Col>
                  <Card>
                    <Card.Header>
                        <Card.Title as="h5">Vendor Details</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                        <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Vendor's Info</h6>
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
                                <hr/>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 text-right">
                                        <h6 className="f-w-300 m-b-0">Vendor's Address:</h6>
                                    </div>

                                    <div className="col-8 text-left">
                                        <p className="m-b-0">56, Adekunle Street, off Borno way, Yaba Lagos.</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Vehicle Info</h6>
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
                                <div className="progress m-t-30" style={{height: '3px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                  </Card>
              </Col>
          </Row>
          <Row>
              <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vehicle Reg Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle registration" />
                    <Form.Text className="text-muted">
                        Additional info to understand better.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vehicle Reg Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle registration" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vehicle Reg Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle registration" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vehicle Reg Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle registration" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Internal Notes</Form.Label>
                    <FormControl as="textarea" placeholder="Add additional information" rows="3" />
                </Form.Group>
              </Col>
          </Row>
            
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

export default VendorVerfModal;