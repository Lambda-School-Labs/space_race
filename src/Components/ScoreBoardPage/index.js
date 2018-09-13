import React, {Component} from 'react';
import Board from './scoreboard';
import QuestionBaord from './questionboard'
import './index.css'
import { connect } from 'react-redux';
import { gettingRace, sendingAnswer } from '../../Actions/adminDeliveryPage';
import NavBar from '../Navigation/NavBar';

// TODO: Style and add ability to highlight answer.
class ScoreBoard extends Component {
  componentWillMount() {
    this.props.gettingRace(this.props.match.params.slug)
  }

  handleAnswer = (data) => {
    this.props.sendingAnswer(data);
  }

  render() {
    return (
      <div style={{width: "100%"}}>
          <NavBar />
        <div className="main" style={{paddingLeft: 150, paddingRight: 150, marginTop: 0}}>
          <Board race={this.props.race} gotRace={this.props.gotRace}/>
          <QuestionBaord index={this.props.race.index} race={this.props.race} quiz={this.props.quiz} gotQuiz={this.props.gotQuiz} gotRace={this.props.gotRace} slug={this.props.match.params.slug} handleAnswerFunc={this.handleAnswer}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      race: state.AdminDelivery.race,
      quiz: state.AdminDelivery.quiz,
      gotQuiz: state.AdminDelivery.gotQuiz,
      gotRace: state.AdminDelivery.gotRace,
  }
}
export default connect(mapStateToProps, { gettingRace, sendingAnswer }) (ScoreBoard);