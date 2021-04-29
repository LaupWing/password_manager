import Vault from '@/components/Vault/Vault'
import React from 'react'
import {Password} from '@/types/Objects'

type AllItemsProps = {
   favorites: Password[]
   addFavorites: Function
}

const AllItems: React.FC<AllItemsProps> = ({
      favorites, 
      addFavorites
   })=> {
   const passwords:Password[] = [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      },
      {
         url: 'www.facebook.com',
         username:  'locdragon@gmail.com',
         password: 'test3',
         name: 'Facebook'
      },
      {
         url: 'www.dribbble.com',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'Dribble'
      },
   ]
   return (
      <Vault
         passwords={passwords}
      />
   );
}

export default AllItems