import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import NoAuthRoute from './no-auth-route';
import PageLayout from '../layouts/page-layout';

const Home = lazy(() => import('../pages/home'));
const Blog = lazy(() => import('../pages/blog'));

const PublicRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);
  console.log('why not come')
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
