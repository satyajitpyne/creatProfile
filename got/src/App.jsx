import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [first, setfirst] = useState(0)
  const [my, setmy] = useState("")
  const [now, setnow] = useState([])

  async function gyu() {
    try {
      const resp = await axios.get('https://randomuser.me/api/')
      console.log(resp.data.results[0].name.first)
      setnow(resp.data.results[0].name.first)
      
    } catch (error) {
      console.log(error)
    }
  }

  // API call only once
 useEffect(function(){
  gyu()

 },[my])

  return (
    <div className='min-h-screen w-screen bg-yellow-500 p-4'>
      
      
      <button className='inline bg-red-500'> tudo</button>
     
      {/* Input */}
      <input
        value={my}
        onChange={(e) => setmy(e.target.value)}
        className="border p-2 mt-4"
        placeholder="Type something"
      />

      <h1 className="mt-2">{my}</h1>

      {/* Counter */}
      <h1>{first}</h1>

      <button
        onClick={() => setfirst(first + 1)}
        className='bg-red-500 text-white px-4 py-2 mt-2'
      >
        submit
      </button>
      <h1>{now}</h1>

    </div>
  )
}

export default App
