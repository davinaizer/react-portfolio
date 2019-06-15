import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { getConfigData } from '../utils/ConfigHelper';
import setConfigAction from '../actions/configAction';

import { ScrollToTop, Spinner, WorkInfo } from '../components';
import { About, Home, Contact, Resume, Work, Navbar } from '../containers';

// remote server base path
const publicPath = process.env.NODE_ENV === 'production' ? '/myportfolio' : null;
const routes = [
    { path: '/', title: 'Home', Component: Home, isVisible: false },
    { path: '/about', title: 'About', Component: About },
    {
        path: '/work',
        title: 'Work',
        Component: Work,
    },
    {
        path: '/work/:id',
        title: 'Work',
        Component: WorkInfo,
        isVisible: false,
    },
    { path: '/resume', title: 'Resume', Component: Resume },
    { path: '/contact', title: 'Contact', Component: Contact },
];

const Router = ({ setConfig, isDataLoaded }) => {
    useEffect(() => {
        setConfig(getConfigData());
    }, [setConfig]);

    return (
        <BrowserRouter basename={publicPath}>
            {isDataLoaded ? (
                <Route
                    render={() => (
                        <>
                            <Navbar links={routes} />
                            <ScrollToTop>
                                <Switch>
                                    {routes.map(({ path, Component }) => (
                                        <Route
                                            key={path}
                                            exact
                                            path={path}
                                            render={props => <Component {...props} />}
                                        />
                                    ))}
                                </Switch>
                            </ScrollToTop>
                        </>
                    )}
                />
            ) : (
                <Spinner />
            )}
        </BrowserRouter>
    );
};

Router.propTypes = {
    setConfig: PropTypes.func.isRequired,
    isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isDataLoaded: state.config.isDataLoaded,
});

const mapDispatchToProps = dispatch => ({
    setConfig: data => dispatch(setConfigAction(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);
