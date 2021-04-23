import {Fragment, useState} from 'react'
import AllItems from './AllItems/AllItems'
import Detail from './Detail/Detail'

const Vault =  function() {
   const [detail, setDetail] = useState(false)

   return (
      <Fragment>
         <AllItems
            detail={detail}
            setDetail={setDetail}
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