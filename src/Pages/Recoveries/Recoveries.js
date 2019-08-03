import React, {Component} from 'react';
import {Row, Col, Table, Tabs, Tab, Badge, Pagination} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Aux from "../../hoc/_Aux";
import moment from "moment";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import RecoveryModal from '../../Components/Modals/RecoveryModal';
import PropTypes from "prop-types";
import config from "../../config";
import {connect} from "react-redux";
import DeliveryActions from "../../Redux/DeliveryRedux";


class Recoveries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            status: config.DELIVERY_RECOVERY_INITIATED
        }
    }

    static propTypes = {
        attemptFetchRecoveries: PropTypes.func.isRequired,
    }


    componentDidMount() {
        this.props.attemptFetchRecoveries({
            page: this.state.page,
            status: this.state.status
        })
    }
    _renderClaimedRecoveries = () => {
        const { deliveriesPayload } = this.props.deliveries;
        return deliveriesPayload.deliveries.map((singleRecovery) => {
            return (
                <tr className="unread">
                    <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/>
                    </td>
                    <td>
                        <h6 className="mb-1">{singleRecovery.receiver_name}</h6>
                        <p className="m-0">{singleRecovery.reason_for_failure}</p>
                    </td>
                    <td>
                        <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>{moment(singleRecovery.updated_at).format('llll')}</h6>
                    </td>
                    <td><Badge variant="success m-r-15"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge><RecoveryModal/>
                    </td>
                </tr>
            )
        });
    }

    _renderPendingRecoveries =() => {
        const { deliveriesPayload } = this.props.deliveries;
        return deliveriesPayload.deliveries.map((singleRecovery) => {
            return (
                <tr className="unread">
                    <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/>
                    </td>
                    <td>
                        <h6 className="mb-1">{singleRecovery.receiver_name}</h6>
                        <p className="m-0">{singleRecovery.reason_for_failure}</p>
                    </td>
                    <td>
                        <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>{moment(singleRecovery.updated_at).format('llll')}</h6>
                    </td>
                    <td><RecoveryModal/></td>
                </tr>
            );
        });
    }

    render() {
        const { total_pages } = this.props.deliveries.deliveriesPayload;
        const pagStyle = {
            float: "right"
        };

        const tabContent1 = (
            <Aux>
                <Table responsive hover>
                    <tbody>
                        {this._renderPendingRecoveries()}
                    </tbody>
                </Table>
            </Aux>
        );

        const tabContent2 = (
            <Aux>
                <Table responsive hover>
                    <tbody>
                        {this._renderClaimedRecoveries()}
                    </tbody>
                </Table>
            </Aux>
        );


        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12} className='m-b-30'>
                        <Tabs defaultActiveKey="pending" id="uncontrolled-tab-example"
                              onSelect={this.onTabDifferentTabSelected}>
                            <Tab eventKey="pending" title="Pending Recoveries">
                                {tabContent1}
                            </Tab>
                            <Tab eventKey="claimed" title="Claimed Packages">
                                {tabContent2}
                            </Tab>
                            
                        </Tabs>
                        <Pagination style={pagStyle} size="sm">
                            <Pagination.First />
                                <Pagination.Prev />
                                    <Pagination.Item>
                                        {this.state.page} of {total_pages} pages
                                    </Pagination.Item>
                                <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>
            </Aux>
        );
    }

    onTabDifferentTabSelected = (eventKey) => {
        if (eventKey === 'pending') {
            this.props.attemptFetchRecoveries({
                page: 1,
                status: config.DELIVERY_RECOVERY_INITIATED
            })
        } else if (eventKey === 'claimed') {
            this.props.attemptFetchRecoveries({
                page: 1,
                status: config.DELIVERY_RECOVERY_COMPLETED
            })
        }
        this.setState({
            page: 1
        })
    }
}

const mapStateToProps = (state) => {
    return {
        deliveries: state.deliveries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptFetchRecoveries: (data) => dispatch(DeliveryActions.fetchingDeliveriesRequest(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recoveries)