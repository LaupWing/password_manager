import {createStore} from 'redux'
import {passwordReducer} from './reducers/passwordReducer'

export default createStore(passwordReducer)