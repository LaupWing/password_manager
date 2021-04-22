import Nav from './Nav/Nav'
import Vault from './Vault/Vault'
import Detail from './Detail/Detail'
import {Switch, Route} from 'react-router-dom'

function App() {
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
         <Vault/>
         <Detail/>
      </div>
   );
}

export default App;
