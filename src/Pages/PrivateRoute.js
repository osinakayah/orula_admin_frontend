import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
import config from '../config';

class PrivateRoute extends Component {

    render() {
        const {component: InnerComponent, ...rest} = this.props;
        const isAuthenticated = this.isAuthenticated();
        const {location} = this.props;

        return (
            <Route {...rest} render={props => (isAuthenticated ? <InnerComponent {...props}/> :
                <Redirect to={{pathname: '/auth/signin', state: {from: location}}}/>)}/>
        );
    }

    isAuthenticated = () => {
        const authToken = reactLocalStorage.get(config.authTokenLocalStorage);
        if (authToken) {
            return true
        }
        return false;

    }
}

export default withRouter(PrivateRoute)