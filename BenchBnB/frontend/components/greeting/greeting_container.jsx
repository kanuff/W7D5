import Greeting from './greeting';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions'


const msp = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
  })
};


const mdp = (dispatch) => {
  return ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: user => dispatch(signup(user))
  })
};

export default connect(msp, mdp)(Greeting)

// {
//   entities: {
//     users: {
//       1: {
//         id: 1,
//           username: 'breakfast'
//       }
//     }
//   },
//   session: {
//     id: 1
//   },
//   errors: {
//     session: []
//   }
// }