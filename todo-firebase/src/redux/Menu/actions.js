const types = {
    MENU_TOGGLE: 'MENU_TOGGLE',
    MENU_SETTING_TOGGLE: 'MENU_SETTING_TOGGLE',

    GET_ALL_PROJECT: 'GET_ALL_PROJECT',
    SAVE_CURRENT_PROJECT: 'SAVE_CURRENT_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    SET_DEFAULT_PROJECT: 'SET_DEFAULT_PROJECT',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    UPDATE_CURRENT_PROJECT: 'UPDATE_CURRENT_PROJECT',

    GET_ALL_LABEL: 'GET_ALL_LABEL',
    SAVE_CURRENT_LABEL: 'SAVE_CURRENT_LABEL',
    DELETE_LABEL: 'DELETE_LABEL',
    SET_DEFAULT_LABEL: 'SET_DEFAULT_LABEL',
    SET_CURRENT_LABEL: 'SET_CURRENT_LABEL',
    UPDATE_CURRENT_LABEL: 'UPDATE_CURRENT_LABEL',

    GET_ALL_FILTER: 'GET_ALL_FILTER',
    SAVE_CURRENT_FILTER: 'SAVE_CURRENT_FILTER',
    DELETE_FILTER: 'DELETE_FILTER',
    SET_DEFAULT_FILTER: 'SET_DEFAULT_FILTER',
    SET_CURRENT_FILTER: 'SET_CURRENT_FILTER',
    UPDATE_CURRENT_FILTER: 'UPDATE_CURRENT_FILTER',

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
            payload: { isBtn }
        }
    },

    getAllProject: () => {
        return {
            type: types.GET_ALL_PROJECT,
            payload: {}
        }
    },
    saveCurrentProject: (entity) => {
        return {
            type: types.SAVE_CURRENT_PROJECT,
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
    setCurrentProject: (project) => {
        return {
            type: types.SET_CURRENT_PROJECT,
            payload: {
                project
            }
        }
    },
    updateCurrentProject: (project) => {
        return {
            type: types.UPDATE_CURRENT_PROJECT,
            payload: {
                project
            }
        }
    },
    deleteProject: (id) => {
        return {
            type: types.DELETE_PROJECT,
            payload: {
                id
            }
        }
    },
    getAllLabel: () => {
        return {
            type: types.GET_ALL_LABEL,
            payload: {}
        }
    },
    saveCurrentLabel: (entity) => {
        return {
            type: types.SAVE_CURRENT_LABEL,
            payload: {
                entity
            }
        }
    },
    setDefaultLabel: () => {
        return {
            type: types.SET_DEFAULT_LABEL,
            payload: {}
        }
    },
    setCurrentLabel: (label) => {
        return {
            type: types.SET_CURRENT_LABEL,
            payload: {
                label
            }
        }
    },
    updateCurrentLabel: (label) => {
        return {
            type: types.UPDATE_CURRENT_LABEL,
            payload: {
                label
            }
        }
    },
    deleteLabel: (id) => {
        return {
            type: types.DELETE_LABEL,
            payload: {
                id
            }
        }
    },
    getAllFilter: () => {
        return {
            type: types.GET_ALL_FILTER,
            payload: {}
        }
    },
    saveCurrentFilter: () => {
        return {
            type: types.SAVE_CURRENT_FILTER,
            payload: {}
        }
    },

    setDefaultFilter: () => {
        return {
            type: types.SET_DEFAULT_FILTER,
            payload: {}
        }
    },
    setCurrentFilter: (filter) => {
        return {
            type: types.SET_CURRENT_FILTER,
            payload: {
                filter
            }
        }
    },
    updateCurrentFilter: (filter) => {
        return {
            type: types.UPDATE_CURRENT_FILTER,
            payload: {
                filter
            }
        }
    },
    deleteFilter: (id) => {
        return {
            type: types.DELETE_FILTER,
            payload: {
                id
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

export default { types, actions };