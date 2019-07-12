import React, {Component} from 'react';
import {Row, Col, Table, Tabs, Tab, Badge} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Aux from "../../hoc/_Aux";

// import Card from "../../App/components/MainCard";
import DEMO from "../../store/constant";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class Recoveries extends Component {
    render() {
        const btnstyle1 = {
            borderRadius: '15px',
          }

          const nameTag = {
              backgroundColor: "cadetblue",
              padding: "8px",
              borderRadius: "50%",
              color: "#fff",
              verticalAlign: "middle"
          }


        const tabContent1 = (
            <Aux>
                <Table responsive hover>
                <tbody>
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                        <td>
                            <h6 className="mb-1">Daniel Abayomi</h6>
                            <p className="m-0">Receiver's number was unreachable...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 JUL 12:56</h6>
                        </td>
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12" style={btnstyle1}>Review</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1}>Claim</a></td>
                    </tr>
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                        <td>
                            <h6 className="mb-1">Cynthia Ezechukwu</h6>
                            <p className="m-0">Receiver left delivery location...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 JUL 10:35</h6>
                        </td>
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12" style={btnstyle1}>Review</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1}>Claim</a></td>
                    </tr>
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                        <td>
                            <h6 className="mb-1">Ifeanyi Osinakayah</h6>
                            <p className="m-0">Cannot reach both the sender and the receiver...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>9 JUL 17:38</h6>
                        </td>
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12" style={btnstyle1}>Review</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1}>Claim</a></td>
                    </tr>
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                        <td>
                            <h6 className="mb-1">Cynthia Ezechukwu</h6>
                            <p className="m-0">Delayed delivery due to traffic holdup...</p>
                        </td>
                        <td>
                            <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15"/>19 JUL 12:56</h6>
                        </td>
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12" style={btnstyle1}>Review</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1}>Claim</a></td>
                    </tr>
                    <tr className="unread">
                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                        <td>
                            <h6 className="mb-1">Cynthia Ezechukwu</h6>
                            <p className="m-0">Delayed delivery due to traffic holdup...</p>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>21 JUL 12:56</h6>
                        </td>
                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12" style={btnstyle1}>Review</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={btnstyle1}>Claim</a></td>
                    </tr>
                </tbody>
            </Table>
            </Aux>
        );

        const tabContent2 = (
            <Aux>
                <Table responsive hover>
                    <tbody>
                        <tr className="unread">
                            <td><span className="rounded-circle" style={nameTag}>DA</span></td>
                            <td>
                                <h6 className="mb-1">Daniel Abayomi</h6>
                                <p className="m-0">Receiver's number was unreachable...</p>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 JUL 12:56</h6>
                            </td>
                            <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge></td>
                        </tr>
                        <tr className="unread">
                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                            <td>
                                <h6 className="mb-1">Cynthia Ezechukwu</h6>
                                <p className="m-0">Receiver left delivery location...</p>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 JUL 10:35</h6>
                            </td>
                            <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge></td>
                        </tr>
                        <tr className="unread">
                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                            <td>
                                <h6 className="mb-1">Ifeanyi Osinakayah</h6>
                                <p className="m-0">Cannot reach both the sender and the receiver...</p>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>9 JUL 17:38</h6>
                            </td>
                            <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge></td>
                        </tr>
                        <tr className="unread">
                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                            <td>
                                <h6 className="mb-1">Cynthia Ezechukwu</h6>
                                <p className="m-0">Delayed delivery due to traffic holdup...</p>
                            </td>
                            <td>
                                <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15"/>19 JUL 12:56</h6>
                            </td>
                            <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge></td>
                        </tr>
                        <tr className="unread">
                            <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                            <td>
                                <h6 className="mb-1">Cynthia Ezechukwu</h6>
                                <p className="m-0">Delayed delivery due to traffic holdup...</p>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>21 JUL 12:56</h6>
                            </td>
                            <td><Badge variant="success"><i className="fa fa-check text-c-red f-10 m-r-15"/>Claimed</Badge></td>
                        </tr>
                    </tbody>
                </Table>
            </Aux>
        );

        // const tabContent3 = (
        //     <Aux>
        //         <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        //             <div className="m-r-10 photo-table">
        //                 <a href={DEMO.BLANK_LINK}><span className="rounded-circle">AO</span></a>
        //             </div>
        //             <div className="media-body">
        //                 <h6 className="m-0 d-inline">Demola</h6>
        //                 <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
        //             </div>
        //         </div>
        //         <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        //             <div className="m-r-10 photo-table">
        //                 <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
        //             </div>
        //             <div className="media-body">
        //                 <h6 className="m-0 d-inline">Samuel</h6>
        //                 <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
        //             </div>
        //         </div> 
        //         <div className="media friendlist-box align-items-center justify-content-center">
        //             <div className="m-r-10 photo-table">
        //                 <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
        //             </div>
        //             <div className="media-body">
        //                 <h6 className="m-0 d-inline">Storm Hanse</h6>
        //                 <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
        //             </div>
        //         </div>
        //     </Aux>
        // );


        return (
            <Aux>
                <Row>
                    <Col md={6} xl={12} className='m-b-30'>
                        <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                            <Tab eventKey="today" title="Active Recoveries">
                                {tabContent1}
                            </Tab>
                            <Tab eventKey="week" title="Claimed Packages">
                                {tabContent2}
                            </Tab>
                            {/* <Tab eventKey="all" title="All">
                                {tabContent3}
                            </Tab> */}
                        </Tabs>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Recoveries;