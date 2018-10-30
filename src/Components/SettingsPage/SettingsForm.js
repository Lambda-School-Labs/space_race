import React, { Component } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import BillingInfo from './BillingInfo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ChangePassword} from '../../Actions/LogIn'

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });

class SettingsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            new_password1: "",
            new_password2: ""
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        if (this.state.new_password1 !== this.state.new_password2) {
            alert("Passwords must match");
        } else {
            this.props.ChangePassword(this.state);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={4} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "40%", paddingTop: 30, height: "100%"}}>
            {/* <Form style={{width: "100%"}}> */}
                {this.props.passwordChanged ? <div style={{color: "green"}}>New password has been saved.</div> : null}
                {this.props.error ? <div style={{color: "red"}}> There was an error changing your password. Please try again. </div> : null}
                <FormGroup >
                    <Label> Email:</Label>
                    <Input type="email" placeholder="Youremail@something.com" value={this.props.loggedIn ? this.props.user.email : "youremail@something"}/>
                </FormGroup>
                <FormGroup>
                    <Label> New Password:</Label>
                    <Input type="password" name="new_password1" value={this.state.new_password1} onChange={this.changeHandler} invalid={this.state.new_password1.length < 8 && this.state.new_password1.length > 0}
                    valid={this.state.new_password1.length >= 8 && this.state.new_password1.length > 0}   placeholder="********"/>
                    <FormFeedback valid>Password is a valid length</FormFeedback>
                    <FormFeedback>Password must be at least 8 characters</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label> Confirm New Password:</Label>
                    <Input type="password" name="new_password2" value={this.state.new_password2} onChange={this.changeHandler} invalid={this.state.new_password1 !== this.state.new_password2} valid={this.state.new_password1 == this.state.new_password2 && this.state.new_password2 > 0} placeholder="********"/>
                    <FormFeedback valid>Passwords Match!</FormFeedback>
                    <FormFeedback>Passwords MUST Match</FormFeedback>
                </FormGroup>
                <Button type="submit" onClick={this.submitHandler}> Save </Button>
            {/* </Form> */}
            </Paper>

        )
    }
}

SettingsForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

let mapStateToProps = state => {
    return {
        user: state.LogIn.user,
        loggedIn: state.LogIn.loggedIn,
        passwordChanged: state.LogIn.passwordChanged
    }
}

let Settings = withStyles(styles)(SettingsForm);
export default connect(mapStateToProps, { ChangePassword })(Settings)

// const mapStateToProps = state => {
//     return {
//         loggedIn: state.LogIn.loggedIn,
//         user: state.LogIn.user
//     }
// }
// export default connect(mapStateToProps, {}) (SettingsForm);