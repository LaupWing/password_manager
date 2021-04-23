import {Fragment, useState} from 'react'
import Items from './Items/Items'
import Detail from './Detail/Detail'
import {Password} from '../../types/Objects'

type VaultProps = {
   favorites: Password[]
   addFavorites: Function
}

const Vault =  ({favorites, addFavorites}:VaultProps)=> {
   const [detail, setDetail] = useState<Password | false>(false)

   return (
      <Fragment>
         <Items
            detail={detail}
            setDetail={setDetail}
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