import {PasswordState} from './parts/Password'
import {FavoriteState} from './parts/Favorite'

export interface State{
   passwords: PasswordState
   favorites: FavoriteState
}