import React, { useContext } from 'react';
import { DetailAnnouncementPage } from './pages/detail_announce';
import Login from './pages/login_page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/register_page';
import { Navbar } from './components/navbar';
import { AuthContext } from './context/AuthContext';
function App() {
  const {userAuthenticated} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Navbar userAuthenticated={userAuthenticated}/>
      <Routes>
        <Route path='' element={userAuthenticated? <Navigate to='/announce-detail'/> : <Login/>}  />
        <Route path='/register' element={userAuthenticated? <Navigate to='/announce-detail'/>:<RegisterPage/>} />
        {/* <Route path='/home' Component={}/> */}
        <Route path='/announce-detail' element={!userAuthenticated? <Navigate to='/'/>:<DetailAnnouncementPage/>}/>
        {/* <Route path='/profile/:id' Component={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
