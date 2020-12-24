import { all, put, takeEvery, fork, select } from 'redux-saga/effects'

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

        yield put(actions.actions.updateState({ allTask }))
    }
    catch (ex) {
        console.log('error: ', ex)
    }
}

function* saga_SaveCurrentTask() {
    try {
        let entity = yield select(state => state.contentReducer.currentTask);

        yield api.addTask(entity);

        yield put(actions.actions.getTasksInbox());
        yield put(actions.actions.setDefaultTask());

    }
    catch (ex) {
        console.log('error: ', ex)
    }

}

function* listen() {
    yield takeEvery(actions.types.GET_TASKS_INBOX, saga_GetAllTasks)
    yield takeEvery(actions.types.SAVE_CURRENT_TASK, saga_SaveCurrentTask)
}

export default function* contentSaga() {
    yield all([fork(listen)])
}
