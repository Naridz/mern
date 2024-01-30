import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Views/Home'
import Create from './Views/Create'
import Edit from './Views/Edit'
import Detail from './Views/Detail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Create/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
    </>
  )
}

export default App