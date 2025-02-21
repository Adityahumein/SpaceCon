import React from 'react'
import Body from './Body'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='App' style={{background: 'linear-gradient(115deg, #000000, #444444)',minHeight:"100vh",width:"100vw"}}>
        
        <Routes>
          <Route path="/" element={<Body />} />
          
        </Routes>
    </div>
    </Router>
  )
}

export default App
