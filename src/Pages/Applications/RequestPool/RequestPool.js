import React, {PureComponent} from 'react';
import {Row, Col, Table, Badge, Pagination} from 'react-bootstrap';
// import Table from "../../Tables/BootstrapTable";
import Aux from "../../../hoc/_Aux";
// import DEMO from "../../../store/constant";
import Card from "../../../Components/MainCard";
import DeliveryActions from '../../../Redux/DeliveryRedux'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import './RequestPoolStyles.css'
import { formatNumberAsCurency, parseDeliveryStatus } from "../../../Utils";
import moment from "moment";
import config from "../../../config";
import DeliveryModal from '../../../Components/Modals/DeliveryModal';
import DEMO from "../../../store/constant";

class RequestPool extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
    }
    static propTypes = {
        attemptFetchDeliveries: PropTypes.func.isRequired,
        attemptFetchDelivery: PropTypes.func.isRequired
    }


    componentDidMount() {
        this.props.attemptFetchDeliveries({
            page: this.state.page,
            status: config.DELIVERY_INITIATED
        })
    }

    renderTableRows = () => {
        const { deliveriesPayload, deliveryPayload } = this.props.deliveries;
        return deliveriesPayload.map((singleDelivery) => {
            return (
                <tr key={singleDelivery.id}>
                    <th scope="row">{singleDelivery.id}</th>
                    <td>{singleDelivery.name}</td>
                    <td>&#8358; {formatNumberAsCurency(singleDelivery.amount)}</td>
                    <td>{moment(singleDelivery.created_at).format('llll')}</td>
                    <td>{singleDelivery.receiver_name}</td>
                    <td><Badge variant="warning">{parseDeliveryStatus(singleDelivery.status)}</Badge></td>
                    <td><a href={DEMO.BLANK_LINK}><DeliveryModal singleDeliveryExtraDetails={deliveryPayload} fetchSingleDeliveryExtraDetails={this.props.attemptFetchDelivery} deliveryId={singleDelivery.id}/></a></td>
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
                        <Card title='Request Pool' anotherOption>
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
                                        1 of 1 pages
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestPool);