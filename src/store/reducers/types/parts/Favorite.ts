import {Password} from '@/types/Objects'

export interface FavoriteState{
   favorites: Password[]
}

export type Action ={
   type: 'ADD_FAVORITE',
   payload: Password
}