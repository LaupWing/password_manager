import {useState} from 'react'
import Nav from './Nav/Nav'
import AllItems from './routes/AllItems'
import Favorites from './routes/Favorites'
import {Switch, Route} from 'react-router-dom'
import {Password} from './types/Objects'
import {useSelector} from 'react-redux'

function App() {
   const routes = (
      <Switch>
         <Route 
            path="/" 
            exact
            component={()=>(
               <AllItems/>
            )}
         />
         <Route 
            path="/favorites" 
            exact
            component={()=>(
               <Favorites
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
