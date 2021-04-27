interface PasswordState{
   passwords: string[]
}

type Action ={
   type: 'ADD_PASSWORD',
   payload: string
}

const initialState = {
   passwords: []
}

export const passwordReducer = (
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