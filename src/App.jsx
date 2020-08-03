import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import PrivateRoute from './routes/private-route'
import PublicRoute from './routes/public-route'

const Scroll = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location])

  return props.children
}

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

const ScrollToTop = withRouter(Scroll)

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={PublicRoute} />
          <Route path="/dashboard" component={PrivateRoute} />
          <Redirect exact from="/dashboard" to="/login" />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
