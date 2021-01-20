const types = {
    MENU_TOGGLE: 'MENU_TOGGLE',
    MENU_SETTING_TOGGLE: 'MENU_SETTING_TOGGLE',

    GET_ALL_PROJECT: 'GET_ALL_PROJECT',
    ADD_PROJECT: 'ADD_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    SET_DEFAULT_PROJECT: 'SET_DEFAULT_PROJECT',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    UPDATE_CURRENT_PROJECT: 'UPDATE_CURRENT_PROJECT',

    GET_ALL_LABEL: 'GET_ALL_LABEL',
    ADD_LABEL: 'ADD_LABEL',
    DELETE_LABEL: 'DELETE_LABEL',
    SET_DEFAULT_LABEL: 'SET_DEFAULT_LABEL',
    SET_CURRENT_LABEL: 'SET_CURRENT_LABEL',
    UPDATE_CURRENT_LABEL: 'UPDATE_CURRENT_LABEL',

    UPDATE_STATE: 'UPDATE_STATE',
}

const actions = {
    menuToggle: () => {
        return {
            type: types.MENU_TOGGLE,
            payload: {}
        }
    },
    
    menuSettingToggle: (isBtn = true) => {
        return {
            type: types.MENU_SETTING_TOGGLE,
            payload: {isBtn}
        }
    },

    addProject: (entity) => {
        return {
            type: types.ADD_PROJECT,
            payload: {
                entity
            }
        }
    },
    
    addLabel: (entity) => {
        return {
            type: types.ADD_LABEL,
            payload: {
                entity
            }
        }
    },

    setDefaultProject: () => {
        return {
            type: types.SET_DEFAULT_PROJECT,
            payload: {}
        }
    },

    setDefaultLabel: () => {
        return {
            types: types.SET_DEFAULT_LABEL,
            payload: {}
        }
    },

    setCurrentProject: (project) => {
        return {
            types: types.SET_CURRENT_PROJECT,
            payload: {
                project
            }
        }
    },

    setCurrentLabel: (label) => {
        return {
            types: types.SET_CURRENT_LABEL,
            payload: {
                label
            }
        }
    },

    updateCurrentProject: (project) => {
        return {
            types: types.UPDATE_CURRENT_PROJECT,
            payload: {
                project
            }
        }
    },

    updateCurrentLabel: (label) => {
        return {
            types: types.UPDATE_CURRENT_LABEL,
            payload: {
                label
            }
        }
    },

    updateState: (state) => {
        return {
            type: types.UPDATE_STATE,
            payload: {
                state
            }
        }
    }
}

export default {types, actions};