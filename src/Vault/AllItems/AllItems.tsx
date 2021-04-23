import {Password} from '../../types/Objects'
import Search from '../../components/Search'

type AllItemsProps = {
   setDetail: Function
   detail: Password | boolean 
}

const AllItems =  ({setDetail, detail}:AllItemsProps)=> {
   const passwords:Password[] = [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      },
      {
         url: 'www.facebook.com',
         username:  'locdragon@gmail.com',
         password: 'test3',
         name: 'Facebook'
      },
      {
         url: 'www.dribbble.com',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'Dribble'
      },
   ]
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
               <li 
                  className={`w-80 flex items-center my-2 p-3 cursor-pointer rounded-md ${JSON.stringify(password) === JSON.stringify(detail) ? 'bg-blue-600' : 'hover:bg-black-lightest'}`}
                  key={i}
                  onClick={()=>setDetail(password)}
               >
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

export default AllItems