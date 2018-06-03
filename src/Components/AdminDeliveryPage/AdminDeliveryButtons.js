import React from 'react'

var buttonStyle = {
    margin: '10px 10px 10px 0'
};

const nextButton = React.createClass({
    render: function () {
        return (
            <button
                className="btn btn-default"
                style={buttonStyle}
                onClick={this.props.handClick}>{this.props.label}</button>
        );
    }
});

const showAnswer = React.createClass({
    render: function () {
        return (
            <button
                className="btn btn-default"
                style={buttonStyle}
                onclick={this.props.handClick}>{this.props.label}</button>
        );
    }
});

module.exports = nextButton, showAnswer;
