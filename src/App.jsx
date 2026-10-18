import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'

import HighJwellery from './pages/HighJwellery'
import Complications from './pages/Complications'
import Heritage from './pages/Heritage'
import Atelier from './pages/Atelier'
import Salons from './pages/Salons'
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Atelier/>}/>
     <Route path="/complications" element={<Complications/>}/>
      <Route path="/heritage" element={<Heritage/>}/>

    <Route path="/high-jwellery" element={<HighJwellery/>}/>
     <Route path="/salons" element={<Salons/>}/>



    </Route>
   </Routes>
  )
}

export default App