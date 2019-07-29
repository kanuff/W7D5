import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser; 
  }

  render(){
    if (this.props.currentUser) {
      return (
        <>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Log Out</button>
        </>
      )
    } else {
      return (
        <>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        </> 
      )
    }
  }


}

export default Greeting; 