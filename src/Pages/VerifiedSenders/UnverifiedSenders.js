import React, {PureComponent} from 'react';
import {Row, Badge, Col, Table, Pagination} from 'react-bootstrap';
import CustomerActions from '../../Redux/CustomerRedux'

import Aux from "../../hoc/_Aux";
import Card from "../../Components/MainCard";
import {connect} from "react-redux";
import config from "../../config";
import PropTypes from "prop-types";

class UnverifiedSenders extends PureComponent {
    static propTypes = {
        attemptFetchCustomers: PropTypes.func.isRequired,
        customers: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            status: config.UNVERIFIED_CUSTOMERS
        }
    }
    componentDidMount() {
        this.props.attemptFetchCustomers({
            page: this.state.page,
            status: this.state.status,
        })
    }

    _renderUnverifiedCustomersRow = () => {
        const {customers } = this.props.customers.customersPayload

        return customers.map((singleCustomer) => {
            return (
                <tr key={singleCustomer.id}>
                    <th scope="row">{singleCustomer.id}</th>
                    <td>{singleCustomer.fullname}</td>
                    <td>{singleCustomer.email}</td>
                    <td>{singleCustomer.phone_number}</td>
                    <td><Badge variant="warning"><i className="fa fa-times text-c-red f-10 m-r-15"/>Unverified</Badge>
                    </td>
                </tr>
            )
        });
    }

    render() {
        const {total_pages } = this.props.customers.customersPayload
        const pagStyle = {
            float: "right"
        };
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Verified Senders' anotherOption>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this._renderUnverifiedCustomersRow()}
                                </tbody>
                            </Table>
                            <Pagination style={pagStyle} size="sm">
                                <Pagination.First/>
                                <Pagination.Prev/>
                                <Pagination.Item>
                                    {this.state.page} of {total_pages} pages
                                </Pagination.Item>
                                <Pagination.Next/>
                                <Pagination.Last/>
                            </Pagination>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers
    };
};
const mapDispatchToProps = dispatch => {
    return {
        attemptFetchCustomers: data => dispatch(CustomerActions.fetchingCustomersRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnverifiedSenders)