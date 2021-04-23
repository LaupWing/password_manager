import LogoImage from '@/assets/lock.png'

const Main =  function() {
   return (
      <div className="h-full bg-black-light border-r-2 border-black">
         <img src={LogoImage} alt="logo" className="w-20 m-auto my-4"/>
         <ul className="text-white text-sm p-2">
            <li className="w-48 p-2 py-1 bg-blue-600 rounded-md">All Items</li>
         </ul>
      </div>
   );
}

export default Main