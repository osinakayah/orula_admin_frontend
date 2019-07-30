import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../Components/MainCard";

class WithdrawRequests extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Pending Requests' isOption>
                            <p>
                            Paystack is coming here
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WithdrawRequests;