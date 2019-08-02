//DispatcherVerfModal.js
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Row, Col, Badge, Tabs, Tab,} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class DeliveryModal extends React.Component {

    state = {
         modal: false};

    toggle = this.toggle.bind(this);



  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const deliveryInfo = (
            <Row>
              <Col>
                <Row>
                <Col md={6} className="mb-4">
                    <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Pickup Info</h6>
                        <div className="row d-flex align-items-center mb-2">
                            <div className="col-4 text-right">
                                <h6 className="f-w-300 m-b-0">Name:</h6>
                            </div>

                            <div className="col-8 text-left">
                                <p className="m-b-0">Daniel Abayomi</p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center mb-2">
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
                                <h6 className="f-w-300 m-b-0">Pickup Address:</h6>
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
                    <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Receiver Info</h6>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Name:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">Daniel Abayomi</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Phone:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">09031822660</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Receiver Address:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">345, Hughes Avenue, Alagomeji, Yaba Lagos</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    </Col>

                    <Col md={6}>
                    <h6 className='mb-4'><i className="feather icon-users text-c-green f-20 m-r-5"/> Dispatcher Info</h6>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Name:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">Samuel Oladele</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Phone:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">09031822677</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Dispatch ID.:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">DR054</p>
                        </div>
                    </div>
                    <div className="progress m-t-50" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    </Col>

                    <Col md={6}>
                    <h6 className='mb-4'><i className="feather icon-briefcase text-c-green f-20 m-r-5"/> Vehicle Info</h6>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Vehicle:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">Toyota Corolla '08</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Plate Number:</h6>
                        </div>
                        <div className="col-8 text-left">
                            <p className="m-b-0">LG001SMK</p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-12 text-center">
                            <Button color="warning" type="button" size="sm">Track Vendor</Button>
                        </div>
                    </div>  
                    {/* <div className="progress m-t-10" style={{height: '3px'}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                    </div> */}
                    </Col>   
                </Row>
              </Col>
          </Row>
    );

    const packageInfo = (
        <Row>
            <Col md={6}>
                <h6 className='mb-4'><i className="feather icon-map text-c-green f-20 m-r-5"/> Package Info</h6>
                <div className="row d-flex align-items-center mb-2">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Package:</h6>
                    </div>
                    <div className="col-8 text-left">
                        <p className="m-b-0">Shoe</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center mb-2">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Capacity:</h6>
                    </div>

                    <div className="col-8 text-left">
                        <p className="m-b-0">Car Trunk</p>
                    </div>
                </div>
                <hr/>
                <div className="row d-flex align-items-center">
                    <div className="col-4 text-right">
                        <h6 className="f-w-300 m-b-0">Addition Info:</h6>
                    </div>

                    <div className="col-8 text-left">
                        <p className="m-b-0">Fragile</p>
                    </div>
                </div>
            </Col>
        </Row>
    );

    return (

        <Aux>
            <Badge variant="primary" size="sm" onClick={this.toggle}>View</Badge>
            {/* <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1} onClick={this.toggle}>Claim</a> */}
            <Modal isOpen={this.state.modal} size="lg">
                <ModalHeader>Deliveries</ModalHeader>
                <ModalBody>
                    <p className="text-center" style={{color: "red"}}>Switch between tabs to navigate</p>
                    <Tabs defaultActiveKey="personal" id="uncontrolled-tab-example" onSelect={this.onTabDifferentTabSelected}>
                    <Tab eventKey="personal" title="Delivery Info">
                        {deliveryInfo}
                    </Tab>
                    <Tab eventKey="vehicle" title="Package Info">
                        {packageInfo}
                    </Tab> 
                    </Tabs>  
                </ModalBody>
                <ModalFooter>
                    {/* <input type="button" value="Verify" color="primary" className="btn btn-primary btn-sm" /> */}
                    <Button color="danger" size="sm" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Aux>
      
    );
  }
}

export default DeliveryModal;