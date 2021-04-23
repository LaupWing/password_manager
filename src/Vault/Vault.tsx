import {Fragment} from 'react'
import AllItems from './AllItems/AllItems'
import Detail from './Detail/Detail'

const Vault =  function() {
   return (
      <Fragment>
         <AllItems/>
         <Detail/>
      </Fragment>
   );
}

export default Vault