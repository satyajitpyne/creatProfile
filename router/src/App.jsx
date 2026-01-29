import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Link, Routes, Route } from 'react-router-dom'
import Men from './component/Men'

const App = () => {
  return (
    <div className='h-screen w-screen bg-violet-500'>

      <div className='w-screen h-70 bg-yellow-500 flex justify-between items-center'>
         <h1 className='text-3xl bold '>navbar</h1>
         <div className='h-70 w-150 flex justify-around items-center'>
           <Link to='/'>home</Link>
           <Link to='/about'>about</Link>


         </div>

        </div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/about/:id' element={<Men/>}></Route>
    </Routes>
    </div>
  )
}

export default App