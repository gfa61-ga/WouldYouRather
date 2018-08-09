import * as API from '../API/_DATA'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const INIT_USERS = 'INIT_USERS'
export const SHOW_SIGN_IN = 'SHOW_SIGN_IN'
export const MENU_URL_SELECT = 'MENU_URL_SELECT'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function showSignIn(open) {
    return {
        type: SHOW_SIGN_IN,
        open
    }
}

export function initUsers (users) {
    return {
        type: INIT_USERS,
        users
    }
}

export function handleInitialData () {
    return (disptach) =>{

        API._getUsers()
            .then(users=>disptach(initUsers(users)))

    }
}

export function menuUrlSelect (HeaderNavValue,SubNavValue) {
    return {
        type: MENU_URL_SELECT,
        HeaderNavValue,
        SubNavValue

    }
}

