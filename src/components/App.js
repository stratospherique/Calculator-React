import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = calculate(this.state, buttonName)
    this.setState({
      total,
      next,
      operation
    })
  }
  render() {
    const { total, next } = this.state;
    return (
      <div id="main-panel">
        {
          (next || total) ? <Display result={next || total} /> : <Display />
        }
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

export default App;