import React, {Component} from 'react';
import {Row, Col, Table, Tabs, Tab, Badge} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Aux from "../../hoc/_Aux";
import moment from "moment";
// import Card from "../../App/components/MainCard";
import DEMO from "../../store/constant";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import RecoveryModal from './RecoveryModal';
import PropTypes from "prop-types";
import config from "../../config";
import {connect} from "react-redux";
import DeliveryActions from "../../Redux/DeliveryRedux";

const btnstyle1 = {
    borderRadius: '15px',
}


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
                    <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge>
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
                    <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12"
                           style={btnstyle1}>Review</a><RecoveryModal/></td>
                </tr>
            );
        });
    }

    render() {

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
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12"
                               style={btnstyle1}>Review</a><RecoveryModal/></td>
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
                            className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge><Badge
                            variant="warning">Details</Badge></td>
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