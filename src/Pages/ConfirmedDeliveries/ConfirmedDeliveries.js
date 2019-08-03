import React, {PureComponent} from 'react';
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
import DeliveryModal from "../../Components/Modals/DeliveryModal";

class ConfirmedDeliveries extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
            status: config.DELIVERY_RECOVERY_INITIATED
        }
    }
    static propTypes = {
        attemptFetchDeliveries: PropTypes.func.isRequired,
        attemptFetchDelivery: PropTypes.func.isRequired
    }


    componentDidMount() {
        this.props.attemptFetchDeliveries({
            page: this.state.page,
            status: this.state.status,
        })
    }
    renderTableRows = () => {
        const { deliveriesPayload, deliveryPayload } = this.props.deliveries;
        return deliveriesPayload.deliveries.map((singleDelivery) => {
            return (
                <tr key={singleDelivery.id}>
                    <th scope="row">{singleDelivery.id}</th>
                    <td>{singleDelivery.name}</td>
                    <td>&#8358; {formatNumberAsCurency(singleDelivery.amount)}</td>
                    <td>{moment(singleDelivery.created_at).format('llll')}</td>
                    <td>{singleDelivery.receiver_name}</td>
                    <td><Badge variant="success">{parseDeliveryStatus(singleDelivery.status)}</Badge></td>
                    <td><a href={DEMO.BLANK_LINK}><DeliveryModal fetchSingleDeliveryExtraDetails={this.props.attemptFetchDelivery} singleDeliveryExtraDetails={deliveryPayload} deliveryId={singleDelivery.id}/></a></td>
                </tr>
            );
        });
    }
    render() {
        const { total_pages } = this.props.deliveries.deliveriesPayload;
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
                                            1 of {total_pages} pages
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
        attemptFetchDeliveries: (data) => dispatch(DeliveryActions.fetchingDeliveriesRequest(data)),
        attemptFetchDelivery: (data) => dispatch(DeliveryActions.fetchingDeliveryRequest(data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmedDeliveries)