import React from 'react'
import UserNavBar from './components/UI/NavBar/UserNavBar.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'

const App = () => {

  const isAdmidPath = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <div>
        {!isAdmidPath && <UserNavBar/>}
      </div>
    

      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
    </>
  )
}

export default App
