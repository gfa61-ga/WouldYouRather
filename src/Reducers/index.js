import {SET_AUTHED_USER} from '../Actions'
import {INIT_USERS} from "../Actions";
import {SHOW_SIGN_IN} from "../Actions";

import {INIT_QUESTIONS} from "../Actions";
import {SUBMIT_VOTE} from "../Actions";
import {SAVE_QUESTION} from "../Actions";

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



        case SAVE_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.author]: {
                    ...state[action.formattedQuestion.author],
                    questions: state[action.formattedQuestion.author].questions.concat([action.formattedQuestion.id])
                }
            }
        case SUBMIT_VOTE:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state
    }

}


function questions (state={},action) {
    switch (action.type) {
        case INIT_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }



        case SAVE_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.id]: action.formattedQuestion
            }



        case SUBMIT_VOTE: // action.questionAnswerObj {authedUser,qId,answer}
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }


                }

            }
        default:
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


const reducers = combineReducers({
    authedUser,
    users,
    questions,
    showSignIn,

})

export default reducers

