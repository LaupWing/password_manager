import CSS from 'csstype'
import Info from './Info/Info'
import {Password} from '../../../types/Objects'
import Edit from '@/components/Icons/Edit'
import Delete from '@/components/Icons/Delete'
import React from 'react'
import {State} from '@/store/reducers/types/State'
import {FavoriteState} from '@/store/reducers/types/parts/Favorites'
import {useSelector, useDispatch} from 'react-redux'

type DetailProps = {
   detail: Password
}

const Detail: React.FC<DetailProps> = ({
   detail, 
}) => {
   const containerStyles: CSS.Properties = {
      maxWidth: '500px'
   }
   const {favorites} = useSelector<State, FavoriteState>((state)=>state.favorites)
   const dispatch = useDispatch()
   const inFavorites = favorites.find(x=>JSON.stringify(x)===JSON.stringify(detail))
   const addFavorites = (password: Password) =>{
      dispatch({
         type: 'TOGGLE_FAVORITE',
         payload: password
      })
   }

   return (
      <div className="flex-1 flex justify-center items-start py-4 px-2 pt-6">
         <div
            className="flex flex-col w-full"
            style={containerStyles}
         >
            <div className="text-white text-sm flex justify-end">
               <button className="py-2 px-4 bg-black-light rounded mr-4 flex items-center">
                  <Edit/>
                  Edit
               </button>
               <button className="py-2 px-4 bg-black-light rounded flex items-center">
                  <Delete/>
                  Delete
               </button>
            </div>
            <header className="py-6 text-white flex">
               <img 
                  src={`https://logo.clearbit.com/${detail.url}`} 
                  alt="instagram"
                  className="w-16 rounded-md"
               />       
               <div className="ml-4">
                  <h2 className="text-2xl font-semibold tracking-wide">{detail.name}</h2>
                  <p className="text-mainGrey">Login</p>
               </div>
               <svg 
                  className={`w-8 h-8 my-auto ml-auto ${inFavorites ? 'fill-current text-yellow-400' : ''} cursor-pointer hover:text-yellow-400`}
                  onClick={()=>addFavorites(detail)} 
                  fill="none" 
                  stroke={inFavorites ? "none" : "currentColor"} 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     strokeWidth="2" 
                     d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  >
                  </path>
               </svg>
            </header>
            <Info
               detail={detail}
            />
         </div>
      </div>
   )
}

export default Detail