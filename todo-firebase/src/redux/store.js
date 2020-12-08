import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';


import menuReducer from './Menu/reducer';
import contentReducer from './content/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    menuReducer,
    contentReducer
}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;