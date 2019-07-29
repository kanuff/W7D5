import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUserId: state.session.id,
    errors: state.errors,
    formType: "login",
  }
}

const mdp = (dispatch) => {

  return {
    processForm: (user) => dispatch(login(user)),
  }
}

export default connect(msp, mdp)(SessionForm)