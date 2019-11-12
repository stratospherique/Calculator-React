import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div id="button-panel">
        <div className="group">
          <Button name="AC" color="#E0E0E0" />
          <Button name="+/-" color="#E0E0E0" />
          <Button name="%" color="#E0E0E0" />
          <Button name="+" />
        </div>
        <div className="group">
          <Button name="7" color="#E0E0E0" />
          <Button name="8" color="#E0E0E0" />
          <Button name="9" color="#E0E0E0" />
          <Button name="x" />
        </div>
        <div className="group">
          <Button name="4" color="#E0E0E0" />
          <Button name="5" color="#E0E0E0" />
          <Button name="6" color="#E0E0E0" />
          <Button name="-" />
        </div>
        <div className="group">
          <Button name="1" color="#E0E0E0" />
          <Button name="2" color="#E0E0E0" />
          <Button name="3" color="#E0E0E0" />
          <Button name="+" />
        </div>
        <div className="group">
          <Button name="0" wide={true} color="#E0E0E0" />
          <Button name="." color="#E0E0E0" />
          <Button name="=" />
        </div>
      </div>
    )
  }
}


export default ButtonPanel;