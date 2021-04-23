import {useState} from 'react'
import Nav from './Nav/Nav'
import AllItems from './routes/AllItems'
import Favorites from './routes/Favorites'
import {Switch, Route} from 'react-router-dom'
import {Password} from './types/Objects'

function App() {
   const [favorites, setFavorites] = useState<Password[]>([
      {
         url: 'www.google.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username: 'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      }
   ])

   const addFavorites = (item:Password)=>{
      if(favorites.find(x=>x===item)){
         setFavorites(favorites.filter(x=>x!==item))
      }else{
         setFavorites([...favorites, item])
      }
      console.log(favorites)
   }
   const routes = (
      <Switch>
         <Route 
            path="/" 
            exact
            component={()=>(
               <AllItems
                  favorites={favorites}
                  addFavorites={addFavorites}
               />
            )}
         />
         <Route 
            path="/favorites" 
            exact
            component={()=>(
               <Favorites
                  favorites={favorites}
                  addFavorites={addFavorites}
               />
            )}
         />
      </Switch>
   )

   return (
      <div className="App w-screen h-screen bg-black-default flex">
         <Nav/>
         {routes}
      </div>
   );
}

export default App;
