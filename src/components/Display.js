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
Display.propTypes = {
  result: PropTypes.string,
}
Display.defaultProps = {
  result: '0',
}

export default Display;