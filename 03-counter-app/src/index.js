import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import FirstApp from './FirstApp';
import './index.css';

const divRoot = document.querySelector('#app');

// ReactDOM.render( <FirstApp greeting="Hello, I'm Iratxe"/> ,divRoot);
ReactDOM.render( <CounterApp />, divRoot);