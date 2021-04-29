import Vault from '@/components/Vault/Vault'
import { Password } from '@/types/Objects'
import React from  'react'

type AllItemsProps = {
   favorites: Password[]
   addFavorites: Function
}

const AllItems:React.FC<AllItemsProps> = ({
   favorites
}) => {
   return (
      <Vault
         passwords={favorites}
      />
   );
}

export default AllItems