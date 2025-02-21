import { useState } from 'react'
import './App2.css'
import Imageslider from './Components/Imageslider'
import Descriptiontext from './Components/Descriptiontext'
import Ourstory from './Components/Ourstory'

function App2() {
  const [count, setCount] = useState(0)

  return (
    <div className="zone" >
      <Imageslider />
      <Descriptiontext />
      <Ourstory />
    </div>
  )
}

export default App2;
