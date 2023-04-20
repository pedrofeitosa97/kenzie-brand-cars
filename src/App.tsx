import React from 'react';
import { DetailAnnouncementPage } from './pages/detail_announce';
import Login from './pages/login_page';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' Component={Login}/>
      <Route path='register' Component={Registe}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
