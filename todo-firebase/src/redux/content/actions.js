const types = {
    GET_TASK: 'GET_TASK',

    GET_TASKS_INBOX: 'GET_TASKS_INBOX',
    GET_TASKS_INBOX_SUCCESS: 'GET_TASKS_INBOX_SUCCESS',

    // CO THE KHONG CAN
    ADD_TASK_INBOX: 'ADD_TASK_INBOX',
    ADD_TASK_TODAY: 'ADD_TASK_TODAY',
    ADD_TASK_UPCOMING: 'ADD_TASK_UPCOMING',

    SET_DEFAULT_TASK: 'SET_DEFAULT_TASK',
    SET_CURRENT_TASK: 'SET_CURRENT_TASK',
    UPDATE_CURRENT_TASK: 'UPDATE_TASK',
    SAVE_CURRENT_TASK: 'SAVE_CURRENT_TASK',

    DELETE_TASK: 'DELETE_TASK',

    UPDATE_STATE: 'UPDATE_STATE',


}

const actions = {
    getTasksInbox: () => {
        return {
            type: types.GET_TASKS_INBOX,
            payload: {}
        }
    },

    //co the khong can
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

    setDefaultTask: () => {
        return {
            type: types.SET_DEFAULT_TASK,
            payload: {}
        }
    },
    setCurrentTask: task => {
        return {
            type: types.SET_CURRENT_TASK,
            payload: {
                task
            }
        }
    },

    updateCurrentTask: task => {
        return {
            type: types.UPDATE_CURRENT_TASK,
            payload: {
                task
            }
        }
    },

    saveCurrentTask: task => {
        return {
            type: types.SAVE_CURRENT_TASK,
            payload: {}
        }
    },

    deleteTask: id => {
        return {
            type: types.DELETE_TASK,
            payload: {id}
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