import React from 'react'
import Cor from './component/Cor.jsx'
import axios from 'axios'
import { useState } from 'react'

const App = (key,) => {
  const [Yu, setYu] = useState([])
  
  async function fg() {
    const re = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log("new bhai bro")
    console.log(re.data)
   setYu(re.data)
    
  }
  return (
    <div className='h-300 w-240 bg-red-500 '>
    <button onClick={fg} className='inline bg-yellow-500'>submit</button>
    {Yu.map(function(ele,idx){
     return <Cor key={idx} nae={ele}/>})}
    </div>
  )
}

export default App 