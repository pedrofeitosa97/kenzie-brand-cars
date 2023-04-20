import React from 'react';
import { DetailAnnouncementPage } from './pages/detail_announce';
import { RegisterPage } from './pages/register_page';
import { Navbar } from './components/navbar';


function App() {
  return (
    <>
    <Navbar userAuthenticated={false}/>
    {/* <DetailAnnouncementPage/> */}
    <RegisterPage/>
    </>
  )
}

export default App;
