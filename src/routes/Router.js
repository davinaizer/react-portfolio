import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import getConfigData from '../utils/ConfigHelper';
import setConfigAction from '../actions/configAction';

import { Navbar } from '../containers';
import { ScrollToTop, Spinner } from '../components';

// workaround for gh-pages
const publicPath = process.env.NODE_ENV === 'production' ? '/myportfolio' : null;

const Router = ({ setConfig, isDataLoaded }) => {
  const loadData = getConfigData();

  useEffect(() => {
    setConfig(loadData);
  }, [setConfig, loadData]);

  return (
    <BrowserRouter basename={publicPath}>
      {isDataLoaded ? (
        <Route
          render={() => (
            <div>
              <Navbar links={routes} />
              <ScrollToTop>
                <Switch>
                  {routes.map(({ path, Component, data }) => (
                    <Route key={path} exact path={path} render={props => <Component {...data} {...props} />} />
                  ))}
                </Switch>
              </ScrollToTop>
            </div>
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
