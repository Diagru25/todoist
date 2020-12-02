import {createStore, combineReducers} from 'redux';

import menuReducer from './Menu/reducer';



const store = createStore(combineReducers({
    menuReducer
}))

export default store;