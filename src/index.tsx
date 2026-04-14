import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

const yoshiColors = ['#398123', '#b00033', '#1a2a5f', '#e1e54B', '#f08B8F', '#65d3dc'];
const randomColor = yoshiColors[Math.floor(Math.random() * yoshiColors.length)];
document.body.style.backgroundColor = randomColor;

render(<App />, document.getElementById('app'));
