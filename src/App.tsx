import React from 'react';
import { DetailAnnouncementPage } from './pages/detail_announce';
import Login from './pages/login_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/register_page';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' Component={Login} />
        <Route path='/register' Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
