import React from 'react';
import PropTypes from 'prop-types';
class Display extends React.Component {
  render() {
    return (
      <div id="display-panel">
        <p>{this.props.result}</p>
      </div>
    )
  }
}

Display.defaultProps = { result: '0' }
Display.propTypes = {
  result: PropTypes.string.isRequired,
}

export default Display;