import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from './SignUp';
import { signingUp } from '../../Actions/LogIn'
import NavBar from '../Navigation/NavBar';


class SignUpIndex extends Component {
  render() {
    return(
      <div style={{width: "100%"}}>
        <NavBar />
        <div style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "40%"}}>
          <SignUp signingUp={this.props.signingUp} error={this.props.error} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.LogIn.error
  }
}
export default connect(mapStateToProps, {signingUp})(SignUpIndex);