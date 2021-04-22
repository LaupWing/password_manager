import CSS from 'csstype'

const Detail  = () =>{
   const containerStyles: CSS.Properties = {
      maxWidth: '500px'
   }

   return (
      <div className="flex-1 flex justify-center items-start py-4 px-2">
         <div 
            className="flex flex-col w-full bg-black-light"
            style={containerStyles}
         >
            Detail
         </div>
      </div>
   )
}

export default Detail