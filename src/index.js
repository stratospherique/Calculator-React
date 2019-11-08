import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const element = document.createElement('div');
element.setAttribute('id', 'root');

ReactDOM.render(
  <App />,
  element,
)