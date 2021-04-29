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
      case 'TOGGLE_FAVORITE':{
         const alreadyInFavorites = state.favorites.find(x=>JSON.stringify(x) === JSON.stringify(action.payload))
         if(alreadyInFavorites){
            return {
               ...state,
               favorites: state.favorites.filter(x=>JSON.stringify(x)!== JSON.stringify(action.payload))
            }
         }
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