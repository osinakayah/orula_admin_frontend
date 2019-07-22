import React, {Component} from 'react';

import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'

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
        return false;
    }
}

export default withRouter(PrivateRoute)