import React, {Component} from 'react';
import {Row, Col, Table, Badge, Pagination} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";
import Card from "../../../Components/MainCard";
import ModalComponent from '../../../Components/ModalComponent';
import DeliveryActions from "../../../Redux/DeliveryRedux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {formatNumberAsCurency, parseDeliveryStatus} from "../../../Utils";
import moment from "moment";
import LoadingOverlay from 'react-loading-overlay';
import config from "../../../config";

class DeliveryPool extends Component {
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
            status: config.DELIVERY_STARTED
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
                    <td><a href={DEMO.BLANK_LINK}><ModalComponent/></a></td>
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
                        <Card title='Delivery Pool' anotherOption>
                            <LoadingOverlay
                                active={deliveries.deliveriesFetching}
                                spinner
                            >
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Sender</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Product</th>
                                        <th>Dispatcher</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPool);