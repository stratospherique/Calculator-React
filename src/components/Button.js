import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const styler = {
      backgroundColor: this.props.color,
      width: this.props.wide ? '50%' : null
    }
    return (
      <button style={styler}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  color: '#F4913E',
  wide: false,
}

export default Button;