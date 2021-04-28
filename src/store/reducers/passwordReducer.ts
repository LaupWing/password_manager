import {Password} from '@/types/Objects'

interface PasswordState{
   passwords: Password[]
}

type Action ={
   type: 'ADD_PASSWORD',
   payload: Password
}

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
   ]
}

const passwordReducer = (
   state: PasswordState = initialState, 
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

export default passwordReducer