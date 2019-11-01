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
            page: 1,
            status: config.DELIVERY_INITIATED
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

    _renderPagination(){
        const { total_pages } = this.props.deliveries.deliveriesPayload;
        let active = this.state.page;
        const items = [];
        for (let number = 1; number <= total_pages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
    }


    _renderTableRows = () => {
        const { deliveriesPayload, deliveryPayload } = this.props.deliveries;

        return deliveriesPayload.data.map((singleDelivery) => {
            return (
                <tr key={singleDelivery.id}>
                    <th scope="row">{singleDelivery.id}</th>
                    <td>{singleDelivery.name}</td>
                    <td>&#8358; {formatNumberAsCurency(singleDelivery.amount)}</td>
                    <td>{moment(singleDelivery.createdAt).format('llll')}</td>
                    <td>{singleDelivery.receiverName}</td>
                    <td><Badge variant="warning">{parseDeliveryStatus(singleDelivery.deliveryStatus)}</Badge></td>
                    <td><a href={DEMO.BLANK_LINK}><DeliveryModal singleDeliveryExtraDetails={deliveryPayload} fetchSingleDeliveryExtraDetails={this.props.attemptFetchDelivery} deliveryId={singleDelivery.id}/></a></td>
                </tr>
            );
        });
    }

    render() {
        const pagStyle = {
            float: "right"
        };
        const { pageCount } = this.props.deliveries.deliveriesPayload;

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
                                        <th>Delivery Id</th>
                                        <th>Item</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Receiver</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {this._renderTableRows()}
                                    </tbody>
                                </Table>
                            </LoadingOverlay>
                            <Pagination style={pagStyle} size="sm">
                                <Pagination.First />
                                <Pagination.Prev />
                                    <Pagination.Item>
                                        1 of {pageCount} pages
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
