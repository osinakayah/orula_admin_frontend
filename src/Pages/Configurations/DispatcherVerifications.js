import React, {Component} from 'react';
import {Row, Col, Table, Badge, Pagination} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../Components/MainCard";
import DEMO from "../../store/constant";
import DispatchersModal from "../../Components/Modals/DispatchersModal";

class DispatcherVerifications extends Component {
    render() {
        const pagStyle = {
            float: "right"
        };
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verify A Dispatcher' isOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Branch</th>
                                    <th>Date</th>
                                    <th>Vehicle Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>Abuja</td>
                                    <td>27/07/19 12:03pm</td>
                                    <td>Car</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><DispatchersModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Daniel Abayomi</td>
                                    <td>Lagos</td>
                                    <td>27/07/19 10:33am</td>
                                    <td>Bike</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><DispatchersModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ifeanyi Osinakayah</td>
                                    <td>Abuja</td>
                                    <td>27/07/19 13:25pm</td>
                                    <td>Bike</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><DispatchersModal/></a></td>
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

export default DispatcherVerifications;