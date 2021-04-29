import {Message} from '@/types/Objects'

export interface MessagesState{
   messages: Message[]
}

export type Action ={
   type: 'ADD_MESSAGE',
   payload: Message
}