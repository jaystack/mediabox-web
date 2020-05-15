import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../api';

import { authReducer } from './modules/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const makeStore = (initState = {}) => createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api }))
  ),
);

export default makeStore;
