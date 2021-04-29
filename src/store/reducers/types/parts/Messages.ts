import {Password} from '@/types/Objects'

export interface MessageState{
   messages: Password[]
}

export type Action ={
   type: 'ADD_MESSAGE',
   payload: Password
}