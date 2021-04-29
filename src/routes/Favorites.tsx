import Vault from '@/components/Vault/Vault'
import {useSelector} from 'react-redux'
import {State} from '@/store/reducers/types/State'
import {FavoritesState} from '@/store/reducers/types/parts/Favorites'

const Favorites= () => {
   const {favorites} = useSelector<State, FavoritesState>((state)=>state.favorites)
   return (
      <Vault
         passwords={favorites}
      />
   );
}

export default Favorites