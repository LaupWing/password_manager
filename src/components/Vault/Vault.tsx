import {Fragment, useState} from 'react'
import Items from './Items/Items'
import Detail from './Detail/Detail'
import {Password} from '../../types/Objects'
import React from 'react'

type VaultProps = {
   favorites: Password[]
   addFavorites: Function
   passwords: Password[]
}

const Vault:React.FC<VaultProps> =  ({
   favorites, 
   addFavorites,
   passwords
})=> {
   const [detail, setDetail] = useState<Password | false>(false)
   return (
      <Fragment>
         <Items
            detail={detail}
            setDetail={setDetail}
            passwords={passwords}
         />
         {detail && 
            <Detail
               detail={detail}
               favorites={favorites}
               addFavorites={addFavorites}
            />
         }
      </Fragment>
   );
}

export default Vault