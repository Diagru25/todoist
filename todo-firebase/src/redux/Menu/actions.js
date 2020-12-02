const types = {
    MENU_TOGGLE: 'MENU_TOGGLE',
    MENU_SETTING_TOGGLE: 'MENU_SETTING_TOGGLE'
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
    }
}

export {types, actions};