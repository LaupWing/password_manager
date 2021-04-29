import {Password} from '@/types/Objects'

export interface FavoriteState{
   favorites: Password[]
}

export type Action ={
   type: 'TOGGLE_FAVORITE',
   payload: Password
}