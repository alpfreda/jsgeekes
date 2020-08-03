import { combineReducers } from 'redux'

import auth from './auth-reducer'
import navbar from './navbar-reducer'

const rootReducer = combineReducers({
  auth,
  navbar
})

export default rootReducer
