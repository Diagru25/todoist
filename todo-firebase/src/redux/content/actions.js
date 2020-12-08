const types = {
    GET_TASK: 'GET_TASK',

    GET_TASKS_INBOX: 'GET_TASKS_INBOX',
    GET_TASKS_INBOX_SUCCESS: 'GET_TASKS_INBOX_SUCCESS',
    ADD_TASK_INBOX: 'ADD_TASK_INBOX',
    ADD_TASK_TODAY: 'ADD_TASK_TODAY',
    ADD_TASK_UPCOMING: 'ADD_TASK_UPCOMING',

    UPDATE_STATE: 'UPDATE_STATE',


}

const actions = {
    getTasksInbox: () => {
        console.log('get task inbox')
        return {
            type: types.GET_TASKS_INBOX,
            payload: {}
        }
    },


    addTaskInbox: (task) => {
        return {
            type: types.ADD_TASK_INBOX,
            payload: task
        }
    },

    addTaskToday: (task) => {
        return {
            type: types.ADD_TASK_TODAY,
            payload: task
        }
    },

    addTaskUpcoming: (task) => {
        return {
            type: types.addTaskUpcoming,
            payload: task
        }
    },

    updateState: state => {
        return {
            type: types.UPDATE_STATE,
            payload: {
                state
            }
        }
    }
}

export default {
    types, actions
}