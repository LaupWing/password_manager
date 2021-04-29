import Vault from '@/components/Vault/Vault'
import {useSelector} from 'react-redux'
import {State} from '@/store/reducers/types/State'
import {FavoriteState} from '@/store/reducers/types/parts/Favorite'

const Favorites= () => {
   const {favorites} = useSelector<State, FavoriteState>((state)=>state.favorites)
   return (
      <Vault
         passwords={favorites}
      />
   );
}

export default Favorites