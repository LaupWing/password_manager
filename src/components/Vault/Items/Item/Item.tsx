import {Password} from '@/types/Objects'
import React from 'react'


type ItemProps = {
   password: Password
   detail: Password | boolean
   setDetail: Function
}

const Item:React.FC<ItemProps> = ({
   setDetail, 
   detail,
   password
})=> {
   return (
      <li 
         className={`w-80 flex items-center my-2 p-3 cursor-pointer rounded-md ${JSON.stringify(password) === JSON.stringify(detail) ? 'bg-blue-600' : 'hover:bg-black-lightest'}`}
         onClick={()=>setDetail(password)}
      >
         <img 
            src={`https://logo.clearbit.com/${password.url}`}
            className="w-10 rounded-md mr-2"
         />
         <div>
            <h2 className="text-base font-bold tracking-wider">{password.name}</h2>
            <p className="text-xs text-gray-400">{password.username}</p>
         </div>
      </li>
   );
}

export default Item