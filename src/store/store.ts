import {createStore, combineReducers} from 'redux'
import passwordReducer from './reducers/passwordReducer'
import favoritesReducer from './reducers/favoritesReducer'

export default createStore(
   combineReducers({
      passwords:passwordReducer,
      favorites: favoritesReducer
   })
)