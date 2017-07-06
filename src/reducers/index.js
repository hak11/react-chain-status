import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
  commentsReducer,
  routing : routerReducer
});
