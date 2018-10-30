import React, { Component } from 'react';
import SignInButton from '../Navigation/SignInButton';
import StudentJoinCard from './StudentJoinCard';
import { connect } from 'react-redux';
import { gettingRace, getQuiz } from '../../Actions/adminDeliveryPage';
import { createStudent } from '../../Actions/studentPage';
import NavBar from '../Navigation/NavBar'

class StudentJoinRacePage extends Component {
    componentDidMount() {
        this.props.getQuiz(window.location.pathname.split( '/' )[2])
        this.props.gettingRace(window.location.pathname.split( '/' )[2])
    }
    render() {
        return(
            <div style={{width: "100%"}}>
            {/* <SignInButton/> */}
            <NavBar />
            <StudentJoinCard race={this.props.race} createStudent={this.props.createStudent} gotRace={this.props.gotRace} slug={window.location.pathname.split( '/' )[2]} history={this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        race: state.AdminDelivery.race,
        gotRace: state.AdminDelivery.gotRace,
        index: state.AdminDelivery.index
    }
}
export default connect(mapStateToProps, {gettingRace, getQuiz, createStudent}) (StudentJoinRacePage);
