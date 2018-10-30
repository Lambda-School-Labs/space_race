import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../../Actions/studentPage'
// import './JoinRace.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// still need to add functionality
// also will need to map over the availble teams for the dropdown menu

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });

//TODO: Style and add random-team function

class StudentJoinCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            team: null,
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    select = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    handleClick = (e) => {
        e.preventDefault();
        let slug = this.props.slug
        let history = this.props.history
        let max = this.props.race.teams.length;
        let random = Math.floor(Math.random() * Math.floor(max));

        if (this.props.race.randomize_team) {
            let team = this.props.race.teams[random].id
            let form = {
                name: this.state.name,
                team: team
            }
            this.props.createStudent(form, slug, history);
        } else {
            this.props.createStudent(this.state, slug, history);
        }
    }

    render() {
        const { classes } = this.props;

        return(
            this.props.gotRace ?
            <div>
                <Paper className={classes.root} elevation={4} style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "40%" }} >
                {!this.props.race.randomize_team ? (
                    <div className="Join_Card">
                        <h5>Join {this.props.race.name}</h5>
                        <Form className="Join_Form">
                            <FormGroup>
                                <Label> First Name :</Label>
                                <Input 
                                onChange={this.onChange}
                                name="name"
                                value={this.state.name}
                                type="text" 
                                placeholder="Enter your First Name" />
                            </FormGroup>
                            <FormGroup >
                                <Label for="selectTeam"> Team: </Label>
                                 <Input 
                                 type="select"
                                 name="team"
                                 onChange={this.select}
                                 id ="selectTeam">
                                 <option></option>
                                 {this.props.race.teams.map(team => {
                                    return <option key={team.id} value={team.id} name="team" >{team.name}</option> 
                                 })}
        
                                </Input>
                                <br />
                                <Button onClick ={this.handleClick} type="submit"> Join the Race! </Button>
                                <br />
                                <br />
                            </FormGroup>
                        </Form>
                    </div> ) : (
                    <div className="Join_Card">
                        <Form className="Join_Form">
                            <FormGroup>
                            <Label> First Name :</Label>
                            <Input 
                                onChange={this.onChange}
                                name="name"
                                value={this.state.name}
                                type="text" 
                                placeholder="Enter your First Name" />
                            <FormGroup >
                                <br />
                                <Button onClick ={this.handleClick} type="submit"> Join the Race! </Button>
                                <br />
                                <br />
                            </FormGroup>
                            </FormGroup>
                        </Form>
                    </div>
                )}
            </Paper>
            </div> : null 
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         race: state.AdminDelivery.race,
//         gotRace: state.AdminDelivery.gotRace,
//         index: state.AdminDelivery.index
//     }
// }

StudentJoinCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(StudentJoinCard);
