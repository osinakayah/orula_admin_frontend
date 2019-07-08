//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import Aux from "../../hoc/_Aux";
class ModalComponent extends React.Component {

    state = {
         modal: false, name: '', team :'' , country: ''};

    toggle = this.toggle.bind(this);
    handleChangeName = this.handleChangeName.bind(this);
    handleChangeTeam = this.handleChangeTeam.bind(this);
    handleChangeCountry = this.handleChangeCountry.bind(this);
    handleSubmit = this.handleSubmit.bind(this);


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeTeam(event) {
    this.setState({team: event.target.value});
  }
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
     }


  render() {
    return (

        <Aux>
          {/* <h1>React Bootstrap Modal Example</h1> */}
        {/* <Button color="success" size="sm" onClick={this.toggle}>Add New Vendor</Button> */}
        <Badge variant="warning" size="sm" onClick={this.toggle}>View</Badge>
        <Modal isOpen={this.state.modal} size="lg">
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Create Vendor</ModalHeader>
          <ModalBody>
          <div className="row">
                <div className="form-group col-md-6">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label>Team:</label>
                    <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
                </div>
            </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Team:</label>
                <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Country:</label>
                <input type="text" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary btn-sm" />
            <Button color="danger" size="sm" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </Aux>
      
    );
  }
}

export default ModalComponent;