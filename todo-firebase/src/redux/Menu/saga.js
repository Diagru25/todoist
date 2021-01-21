import { all, put, takeEvery, fork, select } from 'redux-saga/effects';
import actions from './actions';
import api from '../../helper/api/apiFirebase';
import { message } from "antd";


function* saga_saveProject() {
    try {
        let all_project = yield select(state => state.menuReducer.all_project);
        let entity = yield select(state => state.menuReducer.currentProject);

        if (entity.key === null) {

            entity.key = yield api.addProject(entity).key;
            all_project.push(entity);

            message.success('Add project success: ' + entity.key);
        }
        else {
            yield api.updateProject(entity);

            let foundIndex = all_project.findIndex(project => project.key === entity.key);
            all_project[foundIndex] = entity

            message.success('Edit project success: ' + entity.key);
        }

        yield put(actions.actions.setDefaultProject());
        yield put(actions.actions.updateState({ all_project }));

    }
    catch (ex) {
        console.log(ex);
    }
}

function* saga_saveLabel() {
    try {
        let all_label = yield select(state => state.menuReducer.all_label);
        let entity = yield select(state => state.menuReducer.currentLabel);

        if (entity.key === null) {

            entity.key = yield api.addLabel(entity).key;
            all_label.push(entity);

            message.success('Add label success: ' + entity.key);
            
        }
        else {

            yield api.updateLabel(entity);

            let foundIndex = all_label.findIndex(label => label.key === entity.key);
            all_label[foundIndex] = entity

            message.success('Edit label success: ' + entity.key);
        }

        yield put(actions.actions.setDefaultLabel());
        yield put(actions.actions.updateState({ all_label }));
        

    }
    catch (ex) {
        console.log(ex);
    }
}

function* saga_getAllProject() {
    try {
        let snapShot = yield api.getAllProjects();
        let all_project = [];

        snapShot.forEach(child => {
            let key = child.key;
            let project = child.val();

            all_project.push({ ...project, key })
        })

        yield put(actions.actions.updateState({ all_project }));
    }
    catch (ex) {
        console.log(ex);
    }
}

function* saga_getAllLabel() {
    try {
        let snapShot = yield api.getAllLabels();
        let all_label = [];

        snapShot.forEach(child => {
            let key = child.key;
            let label = child.val();

            all_label.push({ ...label, key })
        })

        yield put(actions.actions.updateState({ all_label }));
    }
    catch (ex) {
        console.log(ex);
    }
}

function* saga_deleteProject(action) {
    try {
        yield api.deleteProject(action.payload.id);

        yield put(actions.actions.getAllProject());

        message.success("Delete project: " + action.payload.id);
    }
    catch (ex) {
        console.log(ex)
    }
}

function* saga_deleteLabel(action) {
    try {
        yield api.deleteLabel(action.payload.id);

        yield put(actions.actions.getAllLabel());

        message.success("Delete label: " + action.payload.id);
    }
    catch (ex) {
        console.log(ex)
    }
}

function* listen() {
    yield takeEvery(actions.types.SAVE_CURRENT_PROJECT, saga_saveProject)
    yield takeEvery(actions.types.SAVE_CURRENT_LABEL, saga_saveLabel)
    yield takeEvery(actions.types.GET_ALL_PROJECT, saga_getAllProject)
    yield takeEvery(actions.types.GET_ALL_LABEL, saga_getAllLabel)
    yield takeEvery(actions.types.DELETE_PROJECT, saga_deleteProject)
    yield takeEvery(actions.types.DELETE_LABEL, saga_deleteLabel)
}

export default function* menuSaga() {
    yield all([fork(listen)])
}

