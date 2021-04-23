import LogoImage from '../assets/lock.png'
import {NavLink} from 'react-router-dom'

const Nav =  function() {
   return (
      <div className="h-full bg-black-light border-r-2 border-black">
         <img src={LogoImage} alt="logo" className="w-20 m-auto my-4"/>
         <ul className="text-white text-sm p-2 px-4 flex flex-col">
            <NavLink 
               className="w-48 p-2 py-1 rounded-md my-1"
               activeClassName="bg-blue-600"
               to="/"
               exact
               >
               All Items
            </NavLink>
            <NavLink 
               className="w-48 p-2 py-1 rounded-md my-1"
               to="/favorites"
               activeClassName="bg-blue-600"
            >
               Favorites
            </NavLink>
         </ul>
      </div>
   );
}

export default Nav