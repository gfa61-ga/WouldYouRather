import thunk from 'redux-thunk'
//import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    // logger,
)

//TODO: save the logged in user to localStorage. and recheck on reload