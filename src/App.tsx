import Nav from './Nav/Nav'
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
      </div>
   );
}

export default App;
