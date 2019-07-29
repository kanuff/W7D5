import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    errors: state.errors,
    formType: "signup",
  }
}

const mdp = (dispatch, ownProps) => {

  return {
    processForm: (user) => dispatch(signup(user)),
  }
}

export default withRouter(connect(msp, mdp)(SessionForm))