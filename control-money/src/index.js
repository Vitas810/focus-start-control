import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './components/root/root';

const rootElement = document.querySelector('#root');

ReactDom.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  rootElement
);
