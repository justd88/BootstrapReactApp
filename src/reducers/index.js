import {combineReducers} from 'redux';
import UserReducer from './user';
import {routerReducer} from 'react-router-redux'
const allReducers = combineReducers({
  user: UserReducer,
  router: routerReducer
});
export default allReducers;
