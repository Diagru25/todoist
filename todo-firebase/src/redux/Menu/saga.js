import {all, put, takeEvery, fork, select} from 'redux-saga/effects';
import actions from './actions';
import api from '../../helper/api/apiFirebase';
import { message } from "antd";


function* saga_addProject(action) {
    try {
        let all_project = yield select(state => state.menuReducer.all_project);

        let key = yield api.addProject(action.payload.entity).key;
        all_project.push({...action.payload.entity, id: key});
        

        yield put(actions.actions.updateState({all_project}));

        message.info('add project success: ' + key);
    }
    catch (ex) {
        console.log(ex);
    }
}

function* saga_addLabel(action) {
    try {
        let all_label = yield select(state => state.menuReducer.all_label);

        let key = yield api.addProject(action.payload.entity).key;
        all_label.push({...action.payload.entity, id: key});

        yield put(actions.actions.updateState({all_label}));

        message.info('add label success: ' + key);
    }
    catch (ex) {
        console.log(ex);
    }
}

function* listen() {
    yield takeEvery(actions.types.ADD_PROJECT, saga_addProject)
    yield takeEvery(actions.types.ADD_LABEL, saga_addLabel)
}

export default function* menuSaga() {
    yield all([fork(listen)])
}

