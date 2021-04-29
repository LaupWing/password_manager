import {Action, MessagesState} from './types/parts/Messages'

const initialState = {
   messages: []
}

export const messagesReducer = (
   state: MessagesState = initialState, 
   action: Action
) =>{
   switch(action.type){
      case 'ADD_MESSAGE':{
         return {
            ...state,
            messages: [...state.messages, action.payload]
         }
      }
      default:
         return state
   }
}