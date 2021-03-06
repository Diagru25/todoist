import actions from './actions';

const defaultProject = {
    key: null,
    name: '',
    description: ''
}

const defaultLabel = {
    key: null,
    name: '',
    description: ''
}

const defaultFilter = {
    key: null,
    name: '',
    description: '',
    color: ''
}

const initialState = {
    show_menu: true,
    show_setting_menu: false,

    all_project: [],
    all_label: [],
    all_filter: [],

    currentProject: defaultProject,
    currentLabel: defaultLabel,
    currentFilter: defaultFilter
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.types.MENU_TOGGLE:
            return { ...state, show_menu: !state.show_menu }

        case actions.types.MENU_SETTING_TOGGLE:
            if (action.payload.isBtn)
                return { ...state, show_setting_menu: !state.show_setting_menu }
            else if (!action.payload.isBtn && state.show_setting_menu) {
                return { ...state, show_setting_menu: false }
            }
            return state

        case actions.types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state
            }

        case actions.types.SET_DEFAULT_PROJECT:
            return {
                ...state,
                ...{
                    currentProject: defaultProject
                }
            }

        case actions.types.UPDATE_CURRENT_PROJECT:
            return {
                ...state,
                ...{
                    currentProject: {
                        ...state.currentProject,
                        ...action.payload.project
                    }
                }
            }

        case actions.types.SET_CURRENT_PROJECT:
            return {
                ...state,
                ...{
                    currentProject: action.payload.project
                }
            }

        case actions.types.SET_DEFAULT_LABEL:
            return {
                ...state,
                ...{
                    currentLabel: defaultLabel
                }
            }
        
        case actions.types.SET_CURRENT_LABEL: 
            return {
                ...state,
                ...{
                    currentLabel: action.payload.label
                }
            }

        case actions.types.UPDATE_CURRENT_LABEL: {
            return {
                ...state,
                ...{
                    currentLabel: {
                        ...state.currentLabel,
                        ...action.payload.label
                    }
                }
            }
        }

        case actions.types.SET_DEFAULT_FILTER: {
            return {
                ...state,
                ...{
                    currentFilter: defaultFilter
                }
            }
        }

        case actions.types.SET_CURRENT_FILTER: {
            return {
                ...state,
                ...{
                    currentFilter: action.payload.filter
                }
            }
        }

        case actions.types.UPDATE_CURRENT_FILTER: {
            return {
                ...state,
                ...{
                    currentFilter: {
                        ...state.currentFilter,
                        ...action.payload.filter
                    }
                }
            }
        }

        case actions.types.SAVE_CURRENT_LABEL:
            return {...state}

        default:
            return state
    }
}

export default reducer;

