import {all} from 'redux-saga/effects';
import contentSaga from './content/saga';
import menuSaga from "./Menu/saga";


export default function* rootSaga() {
    yield all([
        contentSaga(),
        menuSaga()
    ])
}