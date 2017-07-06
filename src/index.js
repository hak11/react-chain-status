import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('flexboxgrid');

axios.defaults.baseURL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:8000/';



injectTapEventPlugin();
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
