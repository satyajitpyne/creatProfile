import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  
  const fty = async function (){
    const gt = await axios.get('http://localhost:8000/data')
    console.log(gt)
  }
  return (
   <div>
       app 
       <button onClick={fty}>hwelloo </button>
       
   </div>
  )
}

export default App
