import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducers } from './reducers';

// apply the middleware
let middleware = applyMiddleware(ReduxThunk);
const composeEnhancers = process.env.NODE_ENV === "production"
    ? null || compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; 

// create the store
const store = createStore( reducers, composeEnhancers(middleware) );

export { store };
