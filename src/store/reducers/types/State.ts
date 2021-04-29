import {PasswordsState} from './parts/Passwords'
import {FavoritesState} from './parts/Favorites'
import {MessagesState} from './parts/Messages'

export interface State{
   passwords: PasswordsState
   favorites: FavoritesState
   messages: MessagesState
}