import { all, put, takeEvery, fork } from 'redux-saga/effects'

import actions from './actions'
import api from '../../helper/api/apiFirebase'

function* saga_GetAllTasks() {

    try {
        const listTask = yield api.getAllTask();

        const allTask = [];
        listTask.forEach(child => {
            let key = child.key;
            let val = child.val();

            allTask.push({
                key: key,
                name: val.name,
                schedule: val.schedule,
                time: val.time,
                projectID: val.projectID,
                tagID: val.tagID,
                priorityID: val.priorityID,
                comment: val.comment,
                activity: val.activity,
                subTask: val.subTask
            })
        })
        console.log('all task saga: ', allTask)

        yield put(actions.actions.updateState({allTask}))
    }
    catch (ex) {
        console.log('error: ', ex)
    }
}

function* listen() {
    yield takeEvery(actions.types.GET_TASKS_INBOX, saga_GetAllTasks)
}

export default function* contentSaga() {
    yield all([fork(listen)])
}
