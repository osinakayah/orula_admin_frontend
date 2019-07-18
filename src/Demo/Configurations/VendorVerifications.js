import React, {Component} from 'react';
import {Row, Col, Table, Badge} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import DEMO from "../../store/constant";
import VendorVerfModal from './VendorVerfModal';

class VendorVerifications extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verify A Vendor' isOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Sender</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Vendor</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>&#8358;1500</td>
                                    <td>27/07/19 12:03pm</td>
                                    <td>Standard</td>
                                    <td>Daniel Abayomi</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><VendorVerfModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>&#8358;1500</td>
                                    <td>27/07/19 10:33am</td>
                                    <td>Scheduled</td>
                                    <td>Daniel Abayomi</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><VendorVerfModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cynthia Ezechukwu</td>
                                    <td>&#8358;1500</td>
                                    <td>27/07/19 13:25pm</td>
                                    <td>Instant</td>
                                    <td>Daniel Abayomi</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><VendorVerfModal/></a></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default VendorVerifications;