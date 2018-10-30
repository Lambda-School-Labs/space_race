import React, {Component} from 'react';
import SignIn from './SignIn';
import { connect } from 'react-redux';
import { loggingIn} from '../../Actions/LogIn';
import NavBar from '../Navigation/NavBar';


class SignInForm extends Component {
  render() {
    return (
      <div style={{width: "100%"}}>
        <NavBar />
        <div style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "40%", paddingTop: 20}}>
          <SignIn  error={this.props.error} loggedIn={this.props.loggedIn} loggingIn={this.props.loggingIn} />
        </div>
      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
      loggedIn: state.LogIn.loggedIn,
      error: state.LogIn.error
  }
}
export default connect(mapStateToProps, { loggingIn })(SignInForm);