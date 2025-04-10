import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import YourMainComponent from './components/YourMainComponent';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <YourMainComponent />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
