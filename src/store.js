import {
  applyMiddleware,
  createStore
} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {
  browserHistory
} from 'react-router';

const middleware = routerMiddleware(browserHistory);
const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, logger,middleware)
);


export default store;
