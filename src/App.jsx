/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Friend from './pages/Friend';
import Groups from './pages/Groups';
import Video from './pages/Video';
import Menu from './pages/Menu';
import Notifications from './pages/Notifications';
import Message from './pages/Message';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/video" element={<Video />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

