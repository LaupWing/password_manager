import CSS from 'csstype'

const Detail  = () =>{
   const containerStyles: CSS.Properties = {
      maxWidth: '500px'
   }

   return (
      <div 
         className="flex flex-col w-full"
         style={containerStyles}
      >
         Detail
      </div>
   )
}

export default Detail