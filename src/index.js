import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
require('flexboxgrid');

const Apps = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(
  <Apps />,
  document.getElementById('root')
);
