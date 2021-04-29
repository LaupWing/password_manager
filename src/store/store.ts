import {createStore, combineReducers} from 'redux'
import {passwordReducer} from './reducers/passwordReducer'
import {favoritesReducer} from './reducers/favoritesReducer'
import {messagesReducer} from './reducers/messagesReducer'
import {State} from './reducers/types/State'

export default createStore(
   combineReducers<State>({
      passwords:passwordReducer,
      favorites: favoritesReducer,
      messages: messagesReducer
   })
)