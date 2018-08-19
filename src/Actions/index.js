import * as API from '../API/_DATA'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const INIT_USERS = 'INIT_USERS'
export const INIT_QUESTIONS = 'INIT_QUESTIONS'
export const SHOW_SIGN_IN = 'SHOW_SIGN_IN'
export const MENU_URL_SELECT = 'MENU_URL_SELECT'
export const SUBMIT_VOTE = 'SUBMIT_VOTE'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const REDIRECT_TO_HOME = 'REDIRECT_TO_HOME'

export function redirectToHome(value) {
    return {
        type: REDIRECT_TO_HOME,
        value
    }

}

export function handleNewQuestion(question) {
    return (dispatch)=>{
        return API._saveQuestion(question)
            .then((formattedQuestion)=>{
                dispatch(saveQuestion(formattedQuestion))
            })
    }
}

export function saveQuestion(formattedQuestion) {
    return {
        type: SAVE_QUESTION,
        formattedQuestion
    }
}

export function handleSubmitVote (qid,answer) {
    return (dispatch,getState)=>{
        const {authedUser} = getState()

        return API._saveQuestionAnswer({authedUser,qid,answer})
            .then(()=>{dispatch(submitVote(authedUser,qid,answer))})
    }
}

export function submitVote (authedUser,qid,answer) {
    return {
        type: SUBMIT_VOTE,
        authedUser,
        qid,
        answer
    }


}




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

export function initQuestion (questions) {
    return {
        type: INIT_QUESTIONS,
        questions

    }
}




export function handleInitialData () {
    return (disptach) =>{

        return API._getUsers()
            .then(users=>{
                disptach(initUsers(users))

                API._getQuestions()
                    .then(questions=>{
                        disptach(initQuestion(questions))
                    })
            })

    }
}

