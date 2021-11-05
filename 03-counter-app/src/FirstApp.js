import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( { greeting, subtitle } ) => {

    return (
        <div>
            <h1> { greeting } </h1>
            {/* <pre> { greeting } </pre> */}
            <p> { subtitle } </p>
        </div>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: "The subtitle"
}

export default FirstApp;