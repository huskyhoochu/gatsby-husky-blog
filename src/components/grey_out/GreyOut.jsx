import React from 'react';

// CSS
import './GreyOut.css';
import { callSidebar } from '../header/Header';

export default () => (
  <div id="grey-out" onClick={() => callSidebar()} aria-hidden />
);
