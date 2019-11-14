import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  render() {
    const styler = {
      backgroundColor: this.props.color,
      width: this.props.wide ? '50%' : null,
    }
    return (
      <button style={styler} onClick={this.handleClick}>
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