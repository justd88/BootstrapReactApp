import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import allReducers from './reducers';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const reactRouterMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(thunk,reactRouterMiddleware);
export const store = createStore(allReducers,composeWithDevTools(
  middleware,
  // other store enhancers if any
));
