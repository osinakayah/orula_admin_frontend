import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import VendorModal from "./VendorModal";

class VerifiedVendors extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verified Vendors' anotherOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Branch</th>
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
                                    <td><VendorModal/></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Daniel Abayomi</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td>Lagos</td>
                                    <td><VendorModal/></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ifeanyi Osinakayah</td>
                                    <td>customer@orula.com</td>
                                    <td>09031822660</td>
                                    <td>Abuja</td>
                                    <td><VendorModal/></td>
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

export default VerifiedVendors;