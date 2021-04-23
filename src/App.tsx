import {useState} from 'react'
import Nav from './Nav/Nav'
import Vault from './Vault/Vault'
import {Switch, Route} from 'react-router-dom'
import {Password} from './types/Objects'

function App() {
   const [favorites, setFavorites] = useState<Password[]>([])

   const addFavorites = (item:Password)=>{
      if(favorites.find(x=>x===item)){
         setFavorites(favorites.filter(x=>x!==item))
      }else{
         setFavorites([...favorites, item])
      }
   }
   const routes = (
      <Switch>
         <Route path="/"/>
         <Route path="/auth"/>
         <Route path="/"/>
      </Switch>
   )

   return (
      <div className="App w-screen h-screen bg-black-default flex">
         <Nav/>
         <Vault
            favorites={favorites}
            addFavorites={addFavorites}
         />
      </div>
   );
}

export default App;
