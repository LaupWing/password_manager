import {Fragment, useState} from 'react'
import Items from './Items/Items'
import Detail from './Detail/Detail'
import {Password} from '../../types/Objects'
import React from 'react'

type VaultProps = {
   passwords: Password[]
}

const Vault:React.FC<VaultProps> =  ({
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
            />
         }
      </Fragment>
   );
}

export default Vault