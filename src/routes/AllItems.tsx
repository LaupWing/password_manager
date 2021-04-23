import Vault from '@/components/Vault/Vault'
import {Password} from '@/types/Objects'

type AllItemsProps = {
   favorites: Password[]
   addFavorites: Function
}

const AllItems = ({
      favorites, 
      addFavorites
   }:AllItemsProps)=> {
   return (
      <Vault
         favorites={favorites}
         addFavorites={addFavorites}
      />
   );
}

export default AllItems