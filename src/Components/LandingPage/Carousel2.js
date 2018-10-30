import React, { Component } from "react";
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import dashboard from './dashboard.png'
import quizform from './quizform.png'
import quiz from './quiz.png'
import studentJoin from './studentJoin.png';
import studentQuiz from './studentQuiz.png';

class Carousel2 extends Component {

  render() {
    return (
      <StyleRoot >
          <Coverflow
            style={{backgroundColor: "yellow"}}
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '960px',
                height: '500px'
              }
            }}
          >
            <img src={dashboard} alt='Intuitive Dashboard' />
            <img src={quizform} alt='Simple Quiz Forms'  />
            <img src={quiz} alt='Instructors Get Live Feedback On Participation' />
            <img src={studentJoin} alt="Easy Sign On For Students" />
            <img src={studentQuiz} alt="Students Get Live Score Feedback" data-action="https://doce.cc/"/>
            {/* <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/> */}
          </Coverflow>
        </StyleRoot>
    );

  }
}

export default Carousel2;