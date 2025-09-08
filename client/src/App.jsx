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

function App() {
  const {isSignedIn, isLoaded} = useUser();
  if(!isLoaded){
    return <Loading/>
  }
  return (
    <Routes>
      <Route path='/' element={!isSignedIn ?<Loggin /> : <Layout/>}>
        <Route index element={<Feed />} />
        <Route path='/layout' element={<Layout/>} />
        <Route path ='/messages' element={ <Messages />} />
        <Route path ='/messages/:userId' element={ <Chatbox />} />
        <Route path ='/connections' element={ <Connections />} />
        <Route path ='/discover' element={ <Discover />} />
        <Route path ='/profile' element={ <Profile />} />
        <Route path ='/profile/:userId' element={ <Profile />} />
        <Route path ='/create-post' element={ <CreatePost />} />
      </Route>
    </Routes>
  )
}
export default App
