//ModalComponent.js
import React from 'react';
import {Card, Badge} from 'react-bootstrap';
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
          <ModalHeader>Delivery Details</ModalHeader>
          <ModalBody>
          <h5 className="mb-4 text-c-red"><i className="feather icon-user-check text-c-red f-20 m-r-5"/> Sender's Information</h5>
          <div className="row">
                <div className="col-md-6">
                  <Card>
                      <Card.Body>
                          <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Pick-up Info</h6>
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
                                  <h6 className="f-w-300 m-b-0">Address:</h6>
                              </div>

                              <div className="col-8 text-left">
                                  <p className="m-b-0">71, Adekunle street, yaba Lagos</p>
                              </div>
                          </div>
                          <div className="progress m-t-30" style={{height: '3px'}}>
                              <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                          </div>
                      </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card>
                      <Card.Body>
                          <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Receiver's Info</h6>
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
                                  <h6 className="f-w-300 m-b-0">Address:</h6>
                              </div>

                              <div className="col-8 text-left">
                                  <p className="m-b-0">16, Fasanya street, fadeyi Lagos.</p>
                              </div>
                          </div>
                          <div className="progress m-t-30" style={{height: '3px'}}>
                              <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                          </div>
                      </Card.Body>
                  </Card>
                </div>
            </div>
            <h5 className="mb-4 text-c-red"><i className="feather icon-user-check text-c-red f-20 m-r-5"/> Delivery Information</h5>
            <div className="row">
              <div className="col-md-6">
              <Card>
                  <Card.Body>
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

                      <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Vehicle:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">Toyota Corolla 2018</p>
                        </div>
                      </div>

                      <hr/>
                      <div className="row d-flex align-items-center">
                        <div className="col-6 text-right">
                            <h6 className="f-w-300 m-b-0">Total Deliveries:</h6>
                        </div>

                        <div className="col-6 text-left">
                            <p className="m-b-0 f-w-600">32</p>
                        </div>
                      </div>
                      
                      <div className="progress m-t-30" style={{height: '3px'}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                  </Card.Body>
              </Card>
              </div>

              <div className="col-md-6">
              <Card>
                  <Card.Body>
                      <h6 className='mb-4'><i className="feather icon-user text-c-green f-20 m-r-5"/> Delivery update</h6>
                      <div className="row d-flex align-items-center">
                        <div className="col-4 text-right">
                            <h6 className="f-w-300 m-b-0">Pickup Time:</h6>
                        </div>

                        <div className="col-8 text-left">
                            <p className="m-b-0">27/07/19 10:53am</p>
                        </div>
                      </div>
                      <div className="text-center" style={{marginTop: "20px"}}>
                        <button type="button" className="btn btn-warning btn-sm">Track Vendor</button>
                      </div>

                      <div className="progress m-t-30" style={{height: '3px'}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                  </Card.Body>
              </Card>
              </div>
            </div>
            {/* <div className="row">
             <div className="form-group col-md-4">
              <label>Country:</label>
                <input type="text" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
               </div>
              </div> */}
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