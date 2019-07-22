import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect }            from 'react-redux';
import PropTypes      from 'prop-types';
import '../../../assets/scss/style.scss';
import '../../../../node_modules/sweetalert/dist/sweetalert.css'
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../Components/Breadcrumb";
import LoginActions from '../../../Redux/LoginRedux'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class SignUp1 extends Component {
    // #region propTypes
    static propTypes= {
        attemptLogin: PropTypes.func.isRequired
    };
    // #endregion

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    signInUser = () => {
        this.props.attemptLogin({
            email: this.state.email,
            password: this.state.password
        })
    }
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>

                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/><h6>Orula Admin</h6>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handlesOnEmailChange}
                                    />
                                </div>
                                <div className="input-group mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.handlesOnPasswordChange}
                                    />
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <button onClick={this.signInUser} className="btn btn-primary shadow-2 mb-4">Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
                </div>
            </Aux>
        );
    }

    // #region form inputs change callbacks
    handlesOnEmailChange = (event) => {

        if (event) {
            event.preventDefault();
            this.setState({ email: event.target.value.trim() });
        }
    }

    handlesOnPasswordChange = (event) => {
        if (event) {
            event.preventDefault();
            this.setState({ password: event.target.value.trim() });
        }
    }
    // #endregion
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (data) => dispatch(LoginActions.loginRequest(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);
