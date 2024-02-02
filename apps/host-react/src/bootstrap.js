import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

function Client() {
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Client />);
