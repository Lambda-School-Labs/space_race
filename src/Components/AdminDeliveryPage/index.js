import React, { Component } from 'react';
import QuestionCard from './AdminDeliveryPage';
// import './AdminDeliveryPage.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });

class AdminDelivery extends Component {
    componentDidMount() {
        // this.props.gettingRace(this.props.match.params.slug)
    }
    render() {
        return (
                <div className="main" style={{width: "100%", margin: 0, padding: 30}}>
                    <QuestionCard classes={this.props.classes} slug={window.location.pathname.split( '/' )[2]}/>
                </div>
        );
    }
}

AdminDelivery.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (AdminDelivery);
