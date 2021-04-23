import {Fragment, useState} from 'react'
import Items from './Items/Items'
import Detail from './Detail/Detail'
import {Password} from '../../types/Objects'

type VaultProps = {
   favorites: Password[]
   addFavorites: Function
   passwords: Password[]
}

const Vault =  ({
   favorites, 
   addFavorites,
   passwords
}:VaultProps)=> {
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