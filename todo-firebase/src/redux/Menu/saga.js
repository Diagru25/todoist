import {all, put, takeEvery, fork, select} from 'redux-saga/effects';
import actions from './actions';
import api from '../../helper/api/apiFirebase';
import { message } from "antd";


function* saga_saveProject() {
    try {
        let all_project = yield select(state => state.menuReducer.all_project);
        let entity = yield select(state => state.menuReducer.currentProject);

        entity.key = yield api.addProject(entity).key;
        all_project.push(entity);
        
        yield put(actions.actions.updateState({all_project}));

        yield put(actions.actions.setDefaultProject());

        message.info('Add project success: ' + entity.key);
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
    yield takeEvery(actions.types.SAVE_CURRENT_PROJECT, saga_saveProject)
    yield takeEvery(actions.types.ADD_LABEL, saga_addLabel)
}

export default function* menuSaga() {
    yield all([fork(listen)])
}

