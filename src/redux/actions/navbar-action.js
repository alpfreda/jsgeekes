import {
  navbarConstants
} from '../constants'

export const setActiveMenu = menu => {
  return (dispatch) => {
    dispatch({
      type: navbarConstants.SET_ACTIVE_MENU,
      payload: menu,
    })
  }
}