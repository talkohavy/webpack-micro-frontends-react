/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function Client() {
  // @ts-ignore
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Client />);
