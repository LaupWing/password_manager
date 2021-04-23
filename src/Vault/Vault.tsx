import {Fragment, useState} from 'react'
import AllItems from './AllItems/AllItems'
import Detail from './Detail/Detail'
import {Password} from '@/types/Objects'

type VaultProps = {
   favorites: Password[]
   addFavorites: Function
}

const Vault =  ({favorites, addFavorites}:VaultProps)=> {
   const [detail, setDetail] = useState<Password | false>(false)

   return (
      <Fragment>
         <AllItems
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