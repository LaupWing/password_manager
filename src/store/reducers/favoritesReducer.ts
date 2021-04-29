import {Action, FavoriteState} from './types/parts/Favorite'

const initialState = {
   favorites: [
      {
         url: 'www.google.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      }
   ]
}

const favoritesReducer = (
   state: FavoriteState = initialState, 
   action: Action
) =>{
   switch(action.type){
      case 'ADD_FAVORITE':{
         return {
            ...state,
            favorites: [...state.favorites, action.payload]
         }
      }
      default:
         return state
   }
}

export default favoritesReducer