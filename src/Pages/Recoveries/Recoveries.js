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
            page: 1
        }
    }

    static propTypes = {
        attemptFetchRecoveries: PropTypes.func.isRequired,
    }


    componentDidMount() {
        this.props.attemptFetchRecoveries({
            page: 1,
            status: config.DELIVERY_RECOVERY_INITIATED
        })
    }
    _renderClaimedRecoveries = () => {
        const { deliveriesPayload } = this.props.deliveries;
        return deliveriesPayload.map((singleRecovery) => {
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
        return deliveriesPayload.map((singleRecovery) => {
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
        const pagStyle = {
            float: "right"
        };

        const tabContent1 = (
            <Aux>
                <Table responsive hover>
                    <tbody>
                    {this._renderPendingRecoveries()}
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/>
                        </td>
                        <td>
                            <h6 className="mb-1">Cynthia Ezechukwu</h6>
                            <p className="m-0">Delayed delivery due to traffic holdup...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>21 JUL
                                12:56</h6>
                        </td>
                        <td><RecoveryModal/></td>
                    </tr>
                    </tbody>
                </Table>
            </Aux>
        );

        const tabContent2 = (
            <Aux>
                <Table responsive hover>
                    <tbody>
                    {this._renderClaimedRecoveries()}
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/>
                        </td>
                        <td>
                            <h6 className="mb-1">Cynthia Ezechukwu</h6>
                            <p className="m-0">Receiver left delivery location...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 JUL 10:35
                            </h6>
                        </td>
                        <td><Badge variant="success m-r-15"><i
                            className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge><RecoveryModal/></td>
                    </tr>
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
                                        1 of 10 pages
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