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

        yield put(actions.actions.updateState({ allTask }))
    }
    catch (ex) {
        console.log('error: ', ex)
    }
}

function* saga_SaveCurrentTask() {
    try {
        let entity = yield select(state => state.contentReducer.currentTask);
        let allTask = yield select(state => state.contentReducer.allTask);


        if (entity.key === null) {
            entity.key = yield api.addTask(entity).key;
            yield put(actions.actions.setDefaultTask());
            allTask.push(entity);

        }
        else {
            allTask.forEach((task, index) => {
                if (task.key === entity.key){
                    task.name = entity.name;
                    task.comment = [...entity.comment];
                    task.schedule = entity.schedule;
                }     
            })

            yield api.updateTask(entity);
            //yield put(actions.actions.setCurrentTask(entity));

        }

        yield put(actions.actions.updateState({ allTask }))

    }
    catch (ex) {
        console.log('error: ', ex)
    }

}

function* saga_deleteTask(action) {
    try {
        yield api.deleteTask(action.payload.id);

        yield put(actions.actions.getTasksInbox());
    }
    catch (ex) {
        console.log(ex);
    }
}

function* listen() {
    yield takeEvery(actions.types.GET_TASKS_INBOX, saga_GetAllTasks)
    yield takeEvery(actions.types.SAVE_CURRENT_TASK, saga_SaveCurrentTask)
    yield takeEvery(actions.types.DELETE_TASK, saga_deleteTask)
}

export default function* contentSaga() {
    yield all([fork(listen)])
}
