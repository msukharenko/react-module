import React, { Component } from 'react';
import {FlatButton} from 'material-ui'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class LabeledButton extends Component {
    render() {
        return (
            <div>
                <FlatButton label={this.props.label} onClick={this.props.onClick}/>
            </div>
        );
    }
}

LabeledButton.propTypes = {
    onLogoutClick: PropTypes.func.isRequired
};


export default LabeledButton;