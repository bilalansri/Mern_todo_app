import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index';
import reduxThunk from 'redux-thunk'

const middlewares = [reduxThunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;

