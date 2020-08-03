import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import NoAuthRoute from './no-auth-route';
import PageLayout from '../layouts/page-layout';

import Home from '../pages/home'
import Blog from '../pages/blog'

const PublicRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <Switch>
        <NoAuthRoute
          exact
          path="/"
          isAuthenticated={loggedIn}
          layout={PageLayout}
          component={Home}
        />

        <NoAuthRoute
          exact
          path={'/blog'}
          isAuthenticated={loggedIn}
          layout={PageLayout}
          component={Blog}
        />
      </Switch>
    </>
  );
};

PublicRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PublicRoute;
