import api from '../../helper/api/apiFirebase'
import actions from './actions'

const initialState = {
    allTask: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.types.GET_TASKS_INBOX:
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
