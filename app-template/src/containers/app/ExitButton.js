import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import {logout} from '../../actions/userDetails'

const mapStateToProps = (state, ownProps) => {
    const {userDetails} = state;
    return {
        label:'Выйти'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(logout()) 
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlatButton)