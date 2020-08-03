import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const NoAuthRoute = ({
  component: Component,
  isAuthenticated,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}

NoAuthRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  layout: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default NoAuthRoute
