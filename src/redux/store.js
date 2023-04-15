import {applyMiddleware,legacy_createStore} from 'redux'
import logger from 'redux-logger'
import inputReducer from './reducer';


const store = legacy_createStore(inputReducer,applyMiddleware(logger))

export default store;