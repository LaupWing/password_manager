import {PasswordsState, Action} from './types/parts/Passwords'

const initialState = {
   passwords: [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      },
      {
         url: 'www.facebook.com',
         username:  'locdragon@gmail.com',
         password: 'test3',
         name: 'Facebook'
      },
      {
         url: 'www.dribbble.com',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'Dribble'
      },
      {
         url: 'www.digid.com',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'DigID'
      },
   ]
}

export const passwordReducer = (
   state: PasswordsState = initialState, 
   action: Action
) =>{
   switch(action.type){
      case 'ADD_PASSWORD':{
         return {
            ...state,
            passwords: [...state.passwords, action.payload]
         }
      }
      default:
         return state
   }
}