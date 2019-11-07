import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = document.createElement('p');
element.innerText = 'Hello world';
document.querySelector('body').append(element);