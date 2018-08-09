import {SET_AUTHED_USER} from '../Actions'
import {INIT_USERS} from "../Actions";
import {SHOW_SIGN_IN} from "../Actions";
import {MENU_URL_SELECT} from "../Actions";

import {combineReducers} from 'redux'

function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.id
        default :
            return state
    }
}

function users (state = {},action) {

    switch (action.type) {
        case INIT_USERS:
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }

}

function showSignIn (state=false,action) {
    switch (action.type) {
        case SHOW_SIGN_IN:
            return action.open
        default:
            return state
    }
}


//TODO: maybe unecessary and can figure out the route from react-router-dom location
function urlSelect (state={SubNavValue:null,HeaderNavValue:null},action) {
    switch (action.type) {
        case MENU_URL_SELECT:
            return {
                SubNavValue: action.SubNavValue,
                HeaderNavValue: action.HeaderNavValue}
        default:
            return state
    }

}

const reducers = combineReducers({
    authedUser,git
    users,
    showSignIn,
    urlSelect
})

export default reducers

