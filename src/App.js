import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStudent } from './Actions/studentPage';
import RequireAuth from './Components/Authentication/RequireAuth';
import ScoreBoard from "./Components/ScoreBoardPage/index";
import LandingPage from "./Components/LandingPage/LandingPage";

import StudentJoinRacePage from "./Components/StudentJoinRacePage/StudentJoinRacePage";
import ShowRaceCard from "./Components/CardViews/ShowRaceCard";
import CreateRaceCard from "./Components/CreateRacePage/index";

import Settings from "./Components/SettingsPage/SettingsForm";
import SignUp from "./Components/UserAccounts/SignUpIndex";
import StudentJoinRace from './Components/StudentJoinRacePage/StudentJoinRacePage'
import SignIn from "./Components/UserAccounts/SignInIndex";
import Dashboard from "./Components/Navigation/SideBar"
import SideBar from './Components/Navigation/SideBar';
import NavBar from './Components/Navigation/NavBar';

import AdminDelivery from './Components/AdminDeliveryPage/index';
import './App.css'


const routes = [
  {
      path: "/settings",
      // exact: true,
      sidebar: () => <SideBar />,
      main: () => <Settings />
  },
  {
      path: "/scoreboard/:slug",
      sidebar: () => <SideBar />,
      main: () => <AdminDelivery />
  },
  {
      path: "/createrace",
      sidebar: () => <SideBar />,
      main: () => <CreateRaceCard />
  },
  // {
  //   path: "/scoreboard",
  //   sidebar: () => <SideBar />,
  //   main: () => <ShowRaceCard />
  // }
]

// const StudentRoutes = [
//   {
//     path: "/joinrace/:slug",
//     navbar: () => <NavBar />,
//     main: () => <StudentJoinRacePage />
//   },
//   {
//     path: "/race/:slug",
//     navbar: () => <NavBar />,
//     main: () => <ScoreBoard />
//   }
// ]
//NOTE:  Authenticated routes are commented out for the time being until the backend gets hooked up.


class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return (                    
      <div className="App">                     
        <Route path="/" exact component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/admindelivery/:slug" component={AdminDelivery} /> */}
        {/* <Route path="/adminrace" component={AdminRace} /> */}
        {/* <Route path="/api" component={App} /> */}
        {/* <Route path="/createrace" component={CreateRaceCard} /> */}
        <Route path="/race/:slug" component={ScoreBoard} />
        <Route path="/joinrace/:slug" component={StudentJoinRacePage} />
        {/* <Route path="/showrace" component={ShowRaceCard} /> */}
        {/* <Route path="/settings" component={Settings} /> */}
        {routes.map((route, index) => (
          <PrivateRoute key={index} path={route.path} exact={route.exact} component={route.sidebar} />
        ))}
        {routes.map((route, index) => (
          <PrivateRoute key={index} path={route.path} exact={route.exact} component={route.main} />
        ))}

        <Route exact path='/signin' render={() => (
          this.props.loggedIn ? (
            <Redirect to='/createrace' />
          ) : <Route to="/signin" />  
        )} />

        <Route path='/createrace' render={() => (
          this.props.signedOut ? (
            <Redirect to='/' />
          ) : <Route to='/createrace' />  
        )} />

        <Route path='/scoreboard/:slug' render={() => (
          this.props.signedOut ? (
            <Redirect to='/' />
          ) : <Route to='/scoreboard/:slug' />  
        )} />

        <Route path='/settings' render={() => (
          this.props.signedOut ? (
            <Redirect to='/' />
          ) : <Route to='/settings' />  
        )} />

        <Route path='/scoreboard' render={() => (
          this.props.signedOut ? (
            <Redirect to='/' />
          ) : <Route to='/scoreboard' />  
        )} />
        
        {/* {StudentRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.navbar} />
        ))}

        {StudentRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        ))} */}

        {/* <Route path="/student" component={StudentJoinRace} /> */}


   {/* ---- when we have the authentication and login hooked up to the back the below routes can be uncommented and the above routes can be deleted ---- */}
      {/*}  <Route path="/admindelivery/:slug" component={RequireAuth(AdminDelivery)} />
        {/*<Route path="/adminrace" component={AdminRace} /> 
        <Route path="/api" component={RequireAuth(App)} />
        <Route path="/createrace" component={RequireAuth(CreateRaceCard)} />
        <Route path="/race/:slug" component={ScoreBoard} />
        <Route path="/joinrace/:slug" component={StudentJoinRacePage} />
        <Route path="/showrace" component={RequireAuth(ShowRaceCard)} />
        <Route path="/settings" component={RequireAuth(Settings)} />
     <Route path="/student" component={RequireAuth(StudentJoinRace)} />  
    */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentCreated: state.Student.studentCreated,
    loggedIn: state.LogIn.loggedIn,
    signedOut: state.LogIn.signedOut
  }
}

export default withRouter(connect(mapStateToProps, { createStudent }) (App));