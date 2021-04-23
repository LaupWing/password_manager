import Vault from '@/components/Vault/Vault'
import { Password } from '@/types/Objects'

type AllItemsProps = {
   favorites: Password[]
   addFavorites: Function
}

const AllItems = ({
   favorites,
   addFavorites
}: AllItemsProps) => {
   const passwords: Password[] = [
      {
         url: 'www.google.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      },
   ]
   return (
      <Vault
         favorites={favorites}
         addFavorites={addFavorites}
         passwords={passwords}
      />
   );
}

export default AllItems