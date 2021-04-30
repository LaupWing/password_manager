import React from 'react'

interface BackdropProps{
   onClick?: Function
}

const Backdrop:React.FC<BackdropProps> = ({
   onClick
})=>(
   <>
      <div 
         className="w-screen h-screen fixed"
         onClick={()=>{
            if(onClick){
               onClick()
            }
         }}
      >
      </div>
      <slot/>
   </>
)

export default Backdrop