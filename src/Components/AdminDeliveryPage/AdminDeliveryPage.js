import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Questions } from '../ScoreBoardPage/questionboard';
import { CreateRaceCard } from '../CardViews/CreateRaceCard';
import { gettingRace, nextQuestion } from '../../Actions/adminDeliveryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Button} from 'reactstrap';
import ScoreBoard from '../ScoreBoardPage/scoreboard'


class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastQuestion: false,
            error: null,
            isHidden: false,
        }
    }


    
    componentWillMount() {
        this.props.gettingRace(this.props.slug)
    }
    
    revealAnswerToggle = event => {
        const active = !this.state.isHidden;
        this.setState({isHidden: active});
    } 
    
    // toggleHidden = event => {
    //     const active = this.state.toggleHidden
    //     this.setState({
    //         isHidden: !active
    //     })
    // }
    nextQuestion = event => {
        event.preventDefault();
        let index = this.props.race.index + 1
        let qlength = this.props.race.questions.length

        if (index >= qlength) {
            this.setState({
                lastQuestion: true
            })
        } else {
            this.props.nextQuestion(this.props.slug);
            this.setState({
                isHidden: false
            })
        }

    }

    render() {
        const { question, isLoading, error, isHidden } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        return (
            <div>
                {/* <Jumbotron className="jumbotron"> */}
                <Paper className={this.props.classes.root} elevation={4}>
                    {!this.props.gotRace ? null :
                    <div>
                        {<div key={this.props.race.questions[this.props.race.index].id}>
                        <Typography variant="caption" gutterBottom align="right">
                            Question {this.props.race.index + 1} of {this.props.race.questions.length}
                        </Typography>
                        <Typography variant="headline" gutterBottom>
                        {this.props.race.questions[this.props.race.index].question}
                        </Typography>
                        <RadioGroup
                            aria-label={this.props.race.questions[this.props.race.index].question}
                            name={this.props.race.questions[this.props.race.index].question}
                            className={this.props.classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                            >
                            {this.props.race.questions[this.props.race.index].answers.map(answer => {
                                return <FormControlLabel key={answer.id}  value={answer.id.toString()} label={answer.answer} control={<Radio color="primary" checked={this.state.isHidden && answer.is_correct ? true : false} disabled={this.state.isHidden && !answer.is_correct ? true : false} />} />
                        })}
                        </RadioGroup>          
                        </div> }
                        <Progress 
                        percent={this.props.race.questions[this.props.race.index].number_of_responses == 0 ? 0 : ((this.props.race.questions[this.props.race.index].number_of_responses/this.props.race.number_of_participants) * 100)}
                        theme={{
                            success: {
                                symbol: '🚀',
                                color: 'rgb(223, 105, 180)'
                            },
                            active: {
                                symbol: '😀',
                                color: '#fbc630'
                            },
                            default: {
                                symbol: '😱',
                                color: '#fbc630'
                            }
                        }}
                        />
                    </div>}
                    <br />
                    <Button color="primary" className="float-left" onClick={this.revealAnswerToggle}> Show Answer</Button>
                    <Button color="primary" className="float-right" onClick={this.nextQuestion}> {this.props.race.index + 1 == this.props.race.questions.length ? "Finish Race!" : "Next Question"}</Button>
                    {this.state.lastQuestion ? <div>Final Score! <ScoreBoard race={this.props.race} gotRace={this.props.gotRace}/> </div> : null}
                    <br />
                    <br />
                </Paper>
            </div>
        );
    }
}




const mapStateToProps = state => {
    return {
        race: state.AdminDelivery.race,
        gotRace: state.AdminDelivery.gotRace,
    }
}
export default connect(mapStateToProps, { gettingRace, nextQuestion }) (QuestionCard);