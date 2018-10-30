import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';



class StartRace extends Component {
  render() {
    let url = window.location.href.split('/');
    url.pop()
    url = url.join('/');
    let adminUrl = this.props.startRace ? `/scoreboard/${this.props.race.slug}` : null;
    return (
      <div>
        {!this.props.startRace ? 
        <CircularProgress className={this.props.classes.progress} size={50} />
        :
        <div>
          <h4>Students can join race here: <a href={`${url}/joinrace/${this.props.race.slug}`}>{url}/joinrace/{this.props.race.slug}</a> </h4>
          <Button variant="contained" href={adminUrl} className={this.props.classes.button}>
            Continue To Race
          </Button>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    startRace: state.CreateRace.startRace,
    race: state.CreateRace.race
  }
}

export default connect(mapStateToProps, {})(StartRace)