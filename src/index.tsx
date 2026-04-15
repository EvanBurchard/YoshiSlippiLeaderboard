import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

const yoshiColors = [
  { bg: '#398123', text: '#ffffff', link: '#e1e54B' },  // green
  { bg: '#b00033', text: '#ffffff', link: '#e1e54B' },  // red
  { bg: '#1a2a5f', text: '#ffffff', link: '#e1e54B' },  // blue
  { bg: '#e1e54B', text: '#1a2a5f', link: '#b00033' },  // yellow
  { bg: '#f08B8F', text: '#1a2a5f', link: '#1a2a5f' },  // pink
  { bg: '#65d3dc', text: '#1a2a5f', link: '#1a2a5f' },  // cyan
];
const scheme = yoshiColors[Math.floor(Math.random() * yoshiColors.length)];
document.body.style.backgroundColor = scheme.bg;
document.documentElement.style.setProperty('--text-color', scheme.text);
document.documentElement.style.setProperty('--link-color', scheme.link);

render(<App />, document.getElementById('app'));
