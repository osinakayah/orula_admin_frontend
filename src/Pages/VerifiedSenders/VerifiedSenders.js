import React, {Component} from 'react';
import {Row, Badge, Col, Table, Pagination} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../Components/MainCard";

class VerifiedSenders extends Component {
    render() {
        const pagStyle = {
            float: "right"
        };
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verified Senders' anotherOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Verified</Badge></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Daniel Abayomi</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Verified</Badge></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ifeanyi Osinakayah</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Verified</Badge></td>
                                </tr>
                                </tbody>
                            </Table>
                            <Pagination style={pagStyle} size="sm">
                                <Pagination.First />
                                    <Pagination.Prev />
                                        <Pagination.Item>
                                            1 of 10 pages
                                        </Pagination.Item>
                                    <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default VerifiedSenders;