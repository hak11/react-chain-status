import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import App from './components';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const NoMatch = () => (
  <div>
    <h1>Data Tidak Ditemukan</h1>
  </div>
);

const history = syncHistoryWithStore(browserHistory, store);
class Routes extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
            <Route path="/" component={App}/>
            <Route component={NoMatch}/>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Routes;
