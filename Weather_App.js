import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Orders from './Orders'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div>
       
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Orders" element={<Orders/>}/>
            <Route path="/Header" element={<Header/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App