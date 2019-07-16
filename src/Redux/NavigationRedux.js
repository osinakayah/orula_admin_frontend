import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import config from "../config";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    collapseMenu: null,
    collapseToggle: ['menu'],
    fullScreen: null,
    fullScreenExit: null,
    changeLayout: ['data'],
    navContentLeave: null,
    navCollapseLeave: ['menu'],
})

export const NavigationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
    ...config,
    isFullScreen: false, // static can't change
})

/* ------------- Selectors ------------- */

export const NavigationSelectors = {
    getData: state => state
}

/* ------------- Reducers ------------- */

export const collapseMenu = state => {
    const collapseMenu = !state.collapseMenu;
    return state.merge({collapseMenu})
}
export const collapseToggle = (state, action) => {
    let open = state.isOpen;
    let trigger = state.isTrigger;
    if (action.menu.type === 'sub') {


        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
            open = open.filter(item => item !== action.menu.id);
            trigger = trigger.filter(item => item !== action.menu.id);
        }

        if (triggerIndex === -1) {
            open = [...open, action.menu.id];
            trigger = [...trigger, action.menu.id];
        }
    } else {
        open = state.isOpen;
        const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
        trigger = (triggerIndex === -1) ? [action.menu.id] : [];
        open = (triggerIndex === -1) ? [action.menu.id] : [];
    }
    return state.merge({isOpen: open, isTrigger: trigger});
}
export const navCollapseLeave = (state, action) => {
    if (action.menu.type === 'sub') {
        let open = state.isOpen;
        let trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
            open = open.filter(item => item !== action.menu.id);
            trigger = trigger.filter(item => item !== action.menu.id);
        }
        return state.merge({isOpen: open, isTrigger: trigger})
    }
    return state;
}

export const navContentLeave = state => {
    return state.merge({isOpen: [], isTrigger:[]});
}

export const fullScreen = (state) => {
    const isFullScreen = !state.isFullScreen;
    return state.merge({isFullScreen});
}

export const fullScreenExit = state => state.merge({isFullScreen: false});

export const changeLayout = (state, {layout}) => {
    return state.merge({layout});
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.COLLAPSE_MENU]: collapseMenu,
    [Types.COLLAPSE_TOGGLE]: collapseToggle,
    [Types.FULL_SCREEN]: fullScreen,

    [Types.FULL_SCREEN_EXIT]: fullScreenExit,
    [Types.CHANGE_LAYOUT]: changeLayout,

    [Types.NAV_CONTENT_LEAVE]: navCollapseLeave,
    [Types.NAV_COLLAPSE_LEAVE]: navContentLeave,
})
