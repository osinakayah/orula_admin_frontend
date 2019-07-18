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
                                    <td><a href={DEMO.BLANK_LINK}><VendorVerfModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Daniel Abayomi</td>
                                    <td>Lagos</td>
                                    <td>27/07/19 10:33am</td>
                                    <td>Bike</td>
                                    <td><Badge variant="warning">Running</Badge></td>
                                    <td><a href={DEMO.BLANK_LINK}><VendorVerfModal/></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ifeanyi Osinakayah</td>
                                    <td>Abuja</td>
                                    <td>27/07/19 13:25pm</td>
                                    <td>Bike</td>
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