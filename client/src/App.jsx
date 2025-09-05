import React from 'react'
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

function App() {
  const user = useUser();
  return (
    <>
    <Routes>
      <Route path='/' element={!user ?<Loggin /> : <Layout/>} />
      <Route path='/layout' element={<Layout/>} />
      <Route path='/feed' element={<Feed />} />
      <Route path ='/messages' element={ <Messages />} />
      <Route path ='/messages/:userId' element={ <Chatbox />} />
      <Route path ='/connections' element={ <Connections />} />
      <Route path ='/discover' element={ <Discover />} />
      <Route path ='/profile' element={ <Profile />} />
      <Route path ='/profile/:userId' element={ <Profile />} />
      <Route path ='/create-post' element={ <CreatePost />} />
    </Routes>
    </>
  )
}
export default App
