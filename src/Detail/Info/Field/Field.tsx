import { useState } from "react"
import Eye from './Icons/Eye'
import Duplicate from './Icons/Duplicate'
import Link from './Icons/Link'

interface FieldType {
   label: string
   value: string
   password: boolean
   eye?: true | undefined
   duplicate?: true | undefined
   link?: true | undefined
}

const Field = ({
      label, 
      value, 
      password,
      duplicate,
      link,
      eye
   }: FieldType) =>{
   const [showPassword, setShowPassword] = useState(false)
   const [showIcons, setShowIcons] = useState(false)

   return (
      <div 
         className="py-4 px-2 rounded-md hover:bg-black-light text-sm flex 
         items-center justify-between overflow-hidden"
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
         <div 
            className={`text-white flex items-center transform duration-200 ${showIcons ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'}`}>
            {eye && <Eye/>}
            {link && <Link/>}
            {duplicate && <Duplicate/>}
         </div>
      </div>
   )
}

export default Field