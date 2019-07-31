import React, {Component} from 'react';
import {Row, Col, Table, Badge, Pagination} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../Components/MainCard";
import DispatchersModal from "./DispatchersModal";

class VerifiedDispatchers extends Component {
    render() {
        const pagStyle = {
            float: "right"
        };
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verified Dispatchers' anotherOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Branch</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td>Abuja</td>
                                    <td><Badge variant="success">Verified</Badge></td>
                                    <td><DispatchersModal/></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Daniel Abayomi</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td>Lagos</td>
                                    <td><Badge variant="success">Verified</Badge></td>
                                    <td><DispatchersModal/></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ifeanyi Osinakayah</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td>Abuja</td>
                                    <td><Badge variant="success">Verified</Badge></td>
                                    <td><DispatchersModal/></td>
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

export default VerifiedDispatchers;