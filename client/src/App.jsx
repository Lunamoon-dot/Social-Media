import { Routes, Route } from 'react-router-dom'
import Loggin from './pages/Loggin'
import Layout from './pages/Layout'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import Chatbox from './pages/Chatbox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import {useUser} from '@clerk/clerk-react'
import Loading from './component/Loading'
import Notfound from './component/Notfound'

function App() {
  const {isSignedIn, isLoaded} = useUser();
  if(!isLoaded){
    return <Loading/>
  }
  return !isSignedIn ? (
    <Routes>
      <Route path='/' element={<Loggin />} />
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='messages/:userId' element={<Chatbox />} />
        <Route path='connections' element={<Connections />} />
        <Route path='discover' element={<Discover />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:userId' element={<Profile />} />
        <Route path='create-post' element={<CreatePost />} />
      </Route>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  )
}
export default App
 
