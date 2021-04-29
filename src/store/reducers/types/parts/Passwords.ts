import {Password} from '@/types/Objects'

export interface PasswordsState{
   passwords: Password[]
}

export type Action ={
   type: 'ADD_PASSWORD',
   payload: Password
}