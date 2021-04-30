import Nav from './Nav/Nav'
import AllItems from './routes/AllItems'
import Favorites from './routes/Favorites'
import {Switch, Route} from 'react-router-dom'

import {MessagesState} from '@/store/reducers/types/parts/Messages'
import Message from '@/components/Message/Message'
import {useSelector} from 'react-redux'
import {State} from '@/store/reducers/types/State'

function App() {
   const {messages} = useSelector<State, MessagesState>((state)=>state.messages)
   
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
         {messages.map(msg=>(
            <Message
               message={msg.text}
            />
         ))
         }
         <Nav/>
         {routes}
      </div>
   );
}

export default App;
