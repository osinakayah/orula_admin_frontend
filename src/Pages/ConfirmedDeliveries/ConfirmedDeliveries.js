import React, {Component} from 'react';
import {Row, Col, Table, Badge, Pagination} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../Components/MainCard";
import {connect} from "react-redux";
import DeliveryActions from "../../Redux/DeliveryRedux";
import PropTypes from "prop-types";
import config from '../../config'
import moment from "moment";
import LoadingOverlay from 'react-loading-overlay';
import {formatNumberAsCurency, parseDeliveryStatus} from "../../Utils";
import DEMO from "../../store/constant";

class ConfirmedDeliveries extends Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
    }
    static propTypes = {
        attemptFetchDeliveries: PropTypes.func.isRequired,
    }


    componentDidMount() {
        this.props.attemptFetchDeliveries({
            page: this.state.page,
            status: config.DELIVERY_RECOVERY_INITIATED
        })
    }
    renderTableRows = () => {
        const { deliveriesPayload } = this.props.deliveries;
        return deliveriesPayload.map((singleDelivery) => {
            return (
                <tr key={singleDelivery.id}>
                    <th scope="row">{singleDelivery.id}</th>
                    <td>{singleDelivery.name}</td>
                    <td>&#8358; {formatNumberAsCurency(singleDelivery.amount)}</td>
                    <td>{moment(singleDelivery.created_at).format('llll')}</td>
                    <td>{singleDelivery.receiver_name}</td>
                    <td><Badge variant="warning">{parseDeliveryStatus(singleDelivery.status)}</Badge></td>
                    <td><a href={DEMO.BLANK_LINK}>View</a></td>
                </tr>
            );
        });
    }
    render() {
        const pagStyle = {
            float: "right"
        };
        const { deliveries } = this.props;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Confirmed Deliveries' anotherOption>
                            <LoadingOverlay
                                active={deliveries.deliveriesFetching}
                                spinner
                            >
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Receiver</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderTableRows()}
                                    </tbody>
                                </Table>
                            </LoadingOverlay>
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
const mapStateToProps = (state) => {
    return {
        deliveries: state.deliveries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptFetchDeliveries: (data) => dispatch(DeliveryActions.fetchingDeliveriesRequest(data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmedDeliveries)