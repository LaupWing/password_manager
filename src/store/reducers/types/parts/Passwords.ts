import {Password} from '@/types/Objects'

export interface PasswordState{
   passwords: Password[]
}

export type Action ={
   type: 'ADD_PASSWORD',
   payload: Password
}