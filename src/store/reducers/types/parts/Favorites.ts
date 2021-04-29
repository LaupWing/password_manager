import {Password} from '@/types/Objects'

export interface FavoritesState{
   favorites: Password[]
}

export type Action ={
   type: 'TOGGLE_FAVORITE',
   payload: Password
}