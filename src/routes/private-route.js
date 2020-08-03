import React, { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/page-layout'
import AuthRoute from './auth-route'

const Home = lazy(() => import('../pages/home'))

const PrivateRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth)

  return (
    <>
      <Switch>
        <AuthRoute
          exact
          path={`${match.path}/home`}
          isAuthenticated={loggedIn}
          layout={PageLayout}
          component={Home}
        />
      </Switch>
    </>
  )
}

PrivateRoute.propTypes = {
  match: PropTypes.object,
}

export default PrivateRoute
