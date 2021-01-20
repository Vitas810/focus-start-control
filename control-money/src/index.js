import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root/root';

const rootElement = document.querySelector('#root');

ReactDom.render(<Root />, rootElement);
