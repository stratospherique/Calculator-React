import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  render() {
    return (
      <div id="main-panel">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}
console.log(calculate(
  {
    total: '10.5',
    next: '5',
    operation: null
  },
  '9'
))

export default App;