import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRaces } from '../../Actions/showRaces';
import { Input, Label, Card, Col, CardText, Row, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import StartRace from '../CreateRacePage/StartRace'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import 'bootstrap/dist/css/bootstrap.css';
import './ShowRaceCard.css'


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "80%",
    height: 600,
    overflow: "scroll"

  }),
});




class ShowRaceCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      runRace: false, 
      open: false,

    }
  }
  componentDidMount() {
    this.props.getRaces();
  }

  startRaceHandler = event => {
    this.setState({
      runRace: true,
      open: true
    })
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    let url = window.location.href.split('/');
    url.pop()
    url = url.join('/');
    return (
      <Paper className={classes.root} elevation={4}>

      <div>No race running. Please add a race to continue</div>
        {/* <div>Saved Races</div>
          <Row>
          {this.props.races.map(race => {
              return <Col sm="4" key={race.id} style={{paddingBottom: 5, paddingTop: 5}}>
              <Card body style={{border: "solid #3f51b5 0.5px"}}>
                <CardTitle>{race.name}</CardTitle>
                <CardText>Teams: {race.teams.length}</CardText>
                <CardText>Questions: {race.questions.length}</CardText>
                <div>
                {race.number_of_participants > 0 ? 
                <Button>Rerun Race</Button>
                : 
                <Button onClick={this.startRaceHandler}>Run Race</Button>}
                <Button>Delete</Button>
                </div>
                {this.state.runRace ? 
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means sending anonymous location data to
                      Google, even when no apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Close
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Continue To Race
                    </Button>
                  </DialogActions>
                </Dialog>

                <div>
                  <h4>Students can join race here: <a href={`${url}/joinrace/${race.slug}`} target="_blank">{url}/joinrace/{race.slug}</a> </h4>
                  <Button variant="contained" href={`${url}/scoreboard/${race.slug}`} >
                    Continue To Race
                  </Button>
                </div>
                : null}
              </Card>
          </Col> })}
          </Row>
      : <CircularProgress className={classes.progress} size={50} />} */}
      </Paper>
    );
  }
};

ShowRaceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

let ShowRace = withStyles(styles)(ShowRaceCard);

const mapStateToProps = state => {
  return {
    races: state.Races.races,
    gotRaces: state.Races.gotRaces
  }
}

export default connect(mapStateToProps, { getRaces })(ShowRace)