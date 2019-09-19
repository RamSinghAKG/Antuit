import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducers } from './reducers';
import sagaMiddleware, {runSaga} from './sagas';


// apply the middleware
let middleware = applyMiddleware(ReduxThunk, sagaMiddleware);
const composeEnhancers = process.env.NODE_ENV === "production"
    ? null || compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; 
// create the store
const store = createStore( reducers, composeEnhancers(middleware) );
runSaga();
export { store };
