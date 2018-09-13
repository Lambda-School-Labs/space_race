import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LandingPage.css';
import Header from './Header';
// import Middle from './Middle';
import Footer from './Footer';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar2 from '../Navigation/NavBar2';
import Carousel2 from './Carousel2';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class LandingPage extends Component {

    render() {
      const { classes } = this.props;
        return (
          <div style={{width: "100%"}}>
            <NavBar2/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/*<Header />*/}
            {/* <Carousel/> */}
            <Carousel2 />
            <h4> A classroom tool that makes it fun and easy to participate </h4>
            <Button variant="contained" color="primary" href="/signup" className={classes.button}>
              Sign Up Now
            </Button>
            {/* <br /> */}
            {/* <br /> */}
            {/* <Footer /> */}
          </div>
        );
      }
    }
    

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
    
export default withStyles(styles)(LandingPage);

