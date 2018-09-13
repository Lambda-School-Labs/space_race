import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import IoAndroidSettings from 'react-icons/lib/io/android-settings';
import IoClipboard from 'react-icons/lib/io/clipboard'
import IoAndroidAddCircle from 'react-icons/lib/io/android-add-circle';
// import { Link } from 'react-router-dom'
import CreateRace from '../CreateRacePage/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sidebar.css';
import Settings from '../SettingsPage/SettingsForm';
import Scoreboard from '../AdminDeliveryPage/';
import IoAndroidContact from 'react-icons/lib/io/android-contact';
import IoLogOut from 'react-icons/lib/io/log-out'
import { Row, Col } from 'reactstrap'
import { signOut } from '../../Actions/LogIn'


// import CreateRace from '../CreateRacePage/index';


// const routes = [
//     {
//         path: "/settings",
//         // exact: true,
//         main: () => <Settings />
//     },
//     {
//         path: "/scoreboard",
//         main: () => <Scoreboard />
//     },
//     {
//         path: "/createrace",
//         main: () => <CreateRace />
//     }
// ]

// updated side bar, may be used instead of side menu
// not sure if all pages are included but can be fixed
// or updated after group input
class SideBar extends Component {
    // let user = this.props.user.username ? this.props.user.username : null;
    render() {
        return (
            <div className="Dashboard">
                {/* <Row className="row"> */}
                    <div style={{padding: 0}}>
                        <Nav vertical className="Menu">
                            <NavItem style={{ listStyleType: "none" }}>
                                
                                <IoAndroidContact size={45}/> Welcome {localStorage.getItem('User')}
                                <hr />
                            </NavItem >
                            <NavItem style={{ listStyleType: "none" }}>
                                <Link to="/createrace"><IoAndroidAddCircle size={30}/> Race</Link>
                            </NavItem >
                            {/* <NavItem style={{ listStyleType: "none" }}>
                                <Link to="/showrace">SHOW</Link>
                            </NavItem> */}
                            <NavItem style={{ listStyleType: "none" }}>
                                <Link to="/scoreboard"><IoClipboard size={30} /> Scoreboard</Link>
                            </NavItem>
                            <NavItem style={{ listStyleType: "none" }}>
                                <Link to="/settings"><IoAndroidSettings size={30} /> Settings</Link>
                            </NavItem> 
                            <NavItem style={{ listStyleType: "none" }}>
                                <Link to="/" onClick={() => this.props.signOut()} ><IoLogOut size={30} /> Log Out</Link>
                            </NavItem> 
                        </Nav>
                    </div>
                    {/* <div style={{width: "100%"}}>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                        ))}
                    </div> */}
                {/* </Row> */}
            </div>
        );

    }
}


const mapStateToProps = state => {
    return {
        loggedIn: state.LogIn.loggingIn,
        user: state.LogIn.user
    }
}
export default connect(mapStateToProps, { signOut }) (SideBar);

