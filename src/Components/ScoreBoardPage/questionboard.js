import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { gettingRace } from '../../Actions/adminDeliveryPage'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup'


const styles = theme => ({
  root: theme.mixins.gutters({
    display: 'flex',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexDirection: 'column' 
  }),
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submit: false,
      question_id: -1,
      answers: []
    }
  }

  componentWillMount() {
      let questions = this.props.race.questions;
      questions.map(question => {
        this.state.answers.push(question.answers.sort(function() { return 0.5 - Math.random() }))
      })
  }


  answerHandler = event => {
    event.preventDefault();
    if(this.state.value.length > 0) {
      this.setState({
        submit: true,
        question_id: this.props.race.questions[this.props.index].id
      })
      let data = {
        slug: this.props.slug,
        answer_id: Number(this.state.value),
        question_id: this.props.race.questions[this.props.index].id
      }
      this.props.handleAnswerFunc(data)
    } else {
      alert("Please answer the question before submitting.")
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    let answers = this.props.race.questions[this.props.index].answers;
    return (
      <Paper className={classes.root} elevation={4}>
          {!this.props.gotRace ? null :
            <FormControl component="fieldset" required className={classes.formControl}>
              {/* <Typography variant="headline" component="h3">
                Question {this.props.index + 1} of {this.props.race.questions.length}
              </Typography>
              <br/> */}
              {/* <Typography variant="title" gutterBottom> */}
              <FormLabel component="legend" focused={true}>Question: {this.props.race.questions[this.props.index].question}</FormLabel>
              {/* </Typography> */}
              {/* <br/> */}
              {/* <Typography variant="subheading" gutterBottom> */}
                {/* <ul> */}
                <RadioGroup
                  aria-label={this.props.race.questions[this.props.index].question}
                  name={this.props.race.questions[this.props.index].question}
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  {this.props.race.questions[this.props.index].shuffle_answers ? this.state.answers[this.props.index].map(answer => {
                    return <FormControlLabel key={answer.id}  value={answer.id.toString()} label={answer.answer} control={<Radio color="primary" />}  disabled={this.state.submit && this.state.question_id == this.props.race.questions[this.props.index].id && this.state.value != answer.id ? true : false}/>
                  }) : answers.map(answer => {
                    return <FormControlLabel key={answer.id}  value={answer.id.toString()} label={answer.answer} control={<Radio color="primary" />}  disabled={this.state.submit && this.state.question_id == this.props.race.questions[this.props.index].id && this.state.value != answer.id ? true : false}/>
                  })}
                {/* </ul> */}
              {/* </Typography> */}
              </RadioGroup>
            </FormControl>}
            <FormGroup>
              <Button variant="contained" style={{width: 150}}  onClick={this.answerHandler} color="primary" className={classes.button} disabled={this.state.submit && this.state.question_id == this.props.race.questions[this.props.index].id ? true : false}>
                Submit
              </Button>
              <Typography variant="caption" gutterBottom align="right">
                Question {this.props.index + 1} of {this.props.race.questions.length}
              </Typography>
            </FormGroup>
        </Paper>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);