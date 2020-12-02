import {types} from './actions';

const initialState = {
    show_menu: true,
    show_setting_menu: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.MENU_TOGGLE: 
            return {...state, show_menu: !state.show_menu}

        case types.MENU_SETTING_TOGGLE:
            if(action.payload.isBtn)
                return {...state, show_setting_menu: !state.show_setting_menu}
            else if(!action.payload.isBtn && state.show_setting_menu) {
                return {...state, show_setting_menu: false}
            }
            return state
            
        default: 
            return state
    }
}

export default reducer;

