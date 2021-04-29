import {PasswordState} from './parts/Passwords'
import {FavoriteState} from './parts/Favorites'

export interface State{
   passwords: PasswordState
   favorites: FavoriteState
}