import {Password} from '../types/Objects'
import Search from '../components/Search'

const Vault =  function() {
   const passwords:Password[] = [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test',
         name: 'Instagram'
      },
   ]
   return (
      <div className="h-full border-r-2 border-black p-3">
         <div className="my-4 flex text-mainGrey">
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
            {passwords.map(password =>(
               <li className="w-80 flex items-center my-2 p-3 hover:bg-black-lightest cursor-pointer rounded-md">
                  <img 
                     src={`https://logo.clearbit.com/${password.url}`}
                     className="w-10 rounded-md mr-2"
                  />
                  <div>
                     <h2 className="text-base font-bold tracking-wider">{password.name}</h2>
                     <p className="text-xs text-gray-400">{password.username}</p>
                  </div>
               </li>
            ))
            }
         </ul>
      </div>
   );
}

export default Vault