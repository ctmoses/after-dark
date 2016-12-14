import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;