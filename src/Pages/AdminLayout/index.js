import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from '../../Components/Navigation';
import NavBar from '../../Components/NavBar';
import Breadcrumb from '../../Components/Breadcrumb';
import Loader from "../../Components/Loader";
import routes from '../../routes'
import Aux from "../../hoc/_Aux";
import NavigationActions from '../../Redux/NavigationRedux'
import PrivateRoute from '../PrivateRoute'

import './app.scss';

class AdminLayout extends Component {

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {

        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <PrivateRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                />
                // <Route
                //     key={index}
                //     path={route.path}
                //     exact={route.exact}
                //     name={route.name}
                //     render={props => (
                //         <route.component {...props} />
                //     )} />
            ) : (null);
        });

        return (
            <Aux>
                <Fullscreen enabled={this.props.isFullScreen}>
                    <Navigation />
                    <NavBar />
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader/>}>
                                                <Switch>
                                                    {menu}
                                                    <Redirect from="/" to={this.props.defaultPath} />
                                                </Switch>
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.nav.defaultPath,
        isFullScreen: state.nav.isFullScreen,
        collapseMenu: state.nav.collapseMenu,
        configBlock: state.nav.configBlock,
        layout: state.nav.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch(NavigationActions.fullScreenExit()),
        onComponentWillMount: () => dispatch(NavigationActions.collapseMenu())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));