import api from '../../helper/api/apiFirebase'
import actions from './actions'


const defaultTask = {
    key:'',
    name: '',
    schedule: null,
    time: null,
    projectID: '',
    tagID: '',
    priorityID: '',
    comment: [],
    activity: [],
    subTask: [] //many task
}

const initialState = {
    allTask: [],
    currentTask: defaultTask
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.types.GET_TASKS_INBOX:
            return state

        case actions.types.SET_DEFAULT_TASK:
            return {
                ...state,
                ...{
                    currentTask: defaultTask
                }
            }
        case actions.types.SET_CURRENT_TASK:
            return {
                ...state,
                ...{
                    currentTask: action.payload.task
                }
            }
        case actions.types.UPDATE_CURRENT_TASK: 
            return {
                ...state,
                ...{
                    currentTask: {
                        ...state.currentTask,
                        ...action.payload.task
                    }
                }
            }
        case actions.types.SAVE_CURRENT_TASK: 
            return state
        case actions.types.UPDATE_TASK:
            return state
        case actions.types.DELETE_TASK:
            return state
        case actions.types.ADD_TASK_INBOX:
            api.addTaskInbox(action.payload)
            return state
        case actions.types.ADD_TASK_TODAY:
            return state
        case actions.types.ADD_TASK_UPCOMING:
            return state 
        case actions.types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state
            }
        default: 
            return {...state}
    }
}

export default reducer;
