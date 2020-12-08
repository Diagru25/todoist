import {all} from 'redux-saga/effects'
import contentSaga from './content/saga'


export default function* rootSaga() {
    yield all([
        contentSaga()
    ])
}