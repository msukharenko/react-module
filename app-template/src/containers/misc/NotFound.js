import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFound extends Component {
    render() {
        return (
            <div>
                Sorry, this route do not exist.
            </div>
        );
    }
}

NotFound.propTypes = {

};

export default NotFound;