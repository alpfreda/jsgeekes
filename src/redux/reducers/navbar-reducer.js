import { navbarConstants } from '../constants'
import initialState from './initial-state'

const authReducer = (state = initialState.navbar, action) => {
  switch (action.type) {
    case navbarConstants.SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
