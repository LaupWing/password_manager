import {Password} from '@/types/Objects'
import Search from '@/components/Search'
import React from 'react'
import Item from './Item/Item'

type ItemsProps = {
   setDetail: Function
   detail: Password | boolean 
   passwords: Password[]
}

const AllItems:React.FC<ItemsProps> = ({
   setDetail, 
   detail,
   passwords
})=> {
   return (
      <div className="h-full border-r-2 border-black p-3 pt-6">
         <div className="mb-4 flex text-mainGrey">
            <div className="bg-black-lightest rounded flex p-2 flex-1">
               <Search/>
               <input 
                  type="text" 
                  className="bg-black-lightest text-sm flex-1 outline-none ml-2"
                  placeholder="Search in Vault"
               />
            </div>
            <button className="w-12 text-2xl text-white rounded ml-4 bg-blue-600">+</button>
         </div>
         <ul className="text-white text-sm">
            {passwords.map((password,i) =>(
               <Item 
                  password={password}
                  detail={detail}
                  key={i}
                  setDetail={setDetail}
               />
            ))
            }
         </ul>
      </div>
   );
}

export default AllItems