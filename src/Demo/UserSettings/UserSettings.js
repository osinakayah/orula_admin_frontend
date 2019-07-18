import React, {Component} from 'react';
import {Row, Col, Form, FormControl, Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class UserSettings extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Update Settings' isOption>
                            <Row>
                                <Col md={6}>
                                    <h6 className='mb-4'><i className="feather icon-lock text-c-green f-20 m-r-5"/> Change Password</h6>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <FormControl type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <FormControl type="password" placeholder="ConfirmPassword" />
                                            <Form.Text className="text-muted text-c-red">
                                                Password didn't match the first one
                                            </Form.Text>
                                        </Form.Group>
                                        <Button variant="primary">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserSettings;