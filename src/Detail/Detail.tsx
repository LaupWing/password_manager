import CSS from 'csstype'

const Detail = () => {
   const containerStyles: CSS.Properties = {
      maxWidth: '500px'
   }

   return (
      <div className="flex-1 flex justify-center items-start py-4 px-2">
         <div
            className="flex flex-col w-full"
            style={containerStyles}
         >
            <div className="text-white text-sm flex justify-end">
               <button className="py-2 px-4 bg-black-light rounded mr-4 flex items-center">
                  <svg 
                     className="w-4 h-4 mr-2" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                     >
                     </path>
                  </svg>
                  Edit
               </button>
               <button className="py-2 px-4 bg-black-light rounded flex items-center">
                  <svg 
                     className="w-4 h-4 mr-2" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     >
                     </path>
                  </svg>
                  Delete
               </button>
            </div>
         </div>
      </div>
   )
}

export default Detail