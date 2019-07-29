import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.target.value})
    }
  }


  processErrors () {
    const errors = this.props.errors.session.map( (error,idx) => {
      return (
        <li key={`error_${idx}`}>{error}</li>
      )
    })
    return errors
  }

  render(){
    if(this.props.currentUserId){
      return (
        <Redirect to="/" />
      )
    }
    if(this.props.formType === "signup"){
      return (
        <>
          <ul>
            {this.processErrors()}
          </ul>
          <h1>Sign Up</h1>
          <Link to={"/login"}>Already have an account?</Link>
          <form onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text" onChange={this.update("username")}/>
            </label>
            <label>Password
              <input type="password" onChange={this.update("password")}/>
            </label>

            <input type="submit" value="submit"/>
          </form>
        </>
      )
    } else {
      return (
        <>
          <ul>
            {this.processErrors()}
          </ul>
          <h1>Login</h1>
          <Link to={"/signup"}>Need an account?</Link>
          <form onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text" onChange={this.update("username")} />
            </label>
            <label>Password
              <input type="password" onChange={this.update("password")} />
            </label>
            <input type="submit" value="submit" />
          </form>
        </>
      )
    }
  }
}