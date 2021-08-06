import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';

const middleware = [thunk];

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

export default store;
