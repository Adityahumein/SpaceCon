import React from 'react'
import Body from './Body'
import Menu from './Components/Menu'
import App2 from './App2'
import Reservation from './App1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='App' style={{background: 'linear-gradient(115deg, #000000, #444444)',minHeight:"100vh",width:"100vw"}}>

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/About-us" element={<App2 />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>

    </div>
    </Router>
  )
}

export default App
