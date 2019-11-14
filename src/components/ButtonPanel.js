import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  state = {
    clicked: Array(19).fill(false)
  }
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName)
  }

  buttonUpdate = (e) => {
    const index = Number(e.target.id)
    this.setState({
      clicked: this.state.clicked.map((item, i) => {
        return i === index ? true : false;
      })
    });
  }

  render() {
    return (
      <div id="button-panel">
        <div className="group">
          <Button id="0" name="AC" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="1" name="+/-" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="2" name="%" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="3" name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="group">
          <Button id="4" name="7" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="5" name="8" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="6" name="9" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="7" name="x" clickHandler={this.handleClick} />
        </div>
        <div className="group">
          <Button id="8" name="4" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="9" name="5" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="10" name="6" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="11" name="-" clickHandler={this.handleClick} />
        </div>
        <div className="group">
          <Button id="12" name="1" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="13" name="2" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="14" name="3" color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="15" name="+" clickHandler={this.handleClick} />
        </div>
        <div className="group">
          <Button id="16" name="0" wide={true} color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="17" name="." color="#E0E0E0" clickHandler={this.handleClick} />
          <Button id="18" name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    )
  }
}


export default ButtonPanel;