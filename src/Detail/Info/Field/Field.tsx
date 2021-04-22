import { useState } from "react"
import Eye from './Icons/Eye'
import Duplicate from './Icons/Duplicate'

interface FieldType {
   label: string
   value: string
   password: boolean
}

const Field = ({label, value, password}: FieldType) =>{
   const [showPassword, setShowPassword] = useState(false)
   const [showIcons, setShowIcons] = useState(false)

   return (
      <div 
         className="py-4 px-2 rounded-md hover:bg-black-light text-sm flex 
         items-center justify-between"
         onMouseOver={()=>setShowIcons(true)}
         onMouseOut={()=>setShowIcons(false)}
      >
         <div>
            <h2 className="text-mainGrey font-bold tracking-wider capitalize mb-1">{label}</h2>
            {password ?
               <input 
                  type={showPassword ? "text" : "password"}
                  value={value}
                  className="text-white bg-transparent pointer-events-none"
               /> :
               <p className="text-white">{value}</p> 
            }
         </div>
         {showIcons && 
            <div className="text-white flex items-center pointer-events-none">
               <Eye/>
               <Duplicate/>
            </div>
         }
      </div>
   )
}

export default Field