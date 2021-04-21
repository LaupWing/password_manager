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
      <div className="h-full bg-black-light border-r-2 border-black">
         <Search/>
         <ul className="text-white text-sm p-2">
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