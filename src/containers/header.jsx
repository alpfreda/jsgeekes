import Header from '../components/header/index'
import { setActiveMenu } from '../redux/actions/navbar-action'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        activeMenu: state.navbar.activeMenu
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setActiveMenu: data => dispatch(setActiveMenu(data)),
        fillError: error => dispatch(fillError(error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
