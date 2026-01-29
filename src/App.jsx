import React from 'react'
import Fema from './component/Female.jsx'
import New from './component/New.jsx'
import { useState } from 'react'

const App = () => {
 const [drm, setdrm] = useState("")
const [bes, setbes] = useState([])
 const [emai, setemai] = useState()
 const [tex, settex] = useState()
 const [nuim, setnuim] = useState()

const removeProfile = (index) => {
  const gy = [...bes]
  const con = confirm('are you want to delete?')
  if(con){
  gy.splice(index, 1)
  } else{
    alert("element not deleted")
  }
  setbes(gy)
}
var w = JSON.stringify(bes)
localStorage.setItem('jho', w)

var p = localStorage.getItem('jho')
var e = JSON.parse(p)
console.log(e)
 
  return (

    <div className="h-screen bg-violetcd-500 p-4" >
      <form className='w-[95vw] h-70 bg-red-500 flex flex-wrap justify-center' onSubmit={function(e){
      e.preventDefault()
      var mega = [...bes,  
      {   
         name: drm,
    email: emai,
    text: tex,
    number: nuim}]
       
      setbes(mega)  
    }} >
      <h1 className='text-2xl font-bold text-[white] '>Create Your Profile</h1>
      
        <input type="text" placeholder='enter your name' className='w-[90vw] h-10 bg-[white] m-2 border-[2px]' onChange={function(e){
          setdrm(e.target.value)

        }}/>
         <input type="email" placeholder='Email address' className='w-[45vw] h-10 bg-[white] m-2 border-[2px]' onChange={function(p){
          setemai(p.target.value)
         }}/>
         <input type="text" placeholder='profession' className='w-[45vw] h-10 bg-[white] m-2 border-[2px]' onChange={function(p){
          settex(p.target.value)
         }}/>
         <input type="url" placeholder='image url' className='w-[45vw] h-10 bg-[white] m-2 border-[2px] 'onChange={function(p){
          setnuim(p.target.value)
         }}/>
         <button className='active:scale-95 w-[15vw] h-11 border-[2px] rounded-lg text-lg font-bold bg-green-500' type='submit'>submit</button>
      </form>
      
      <div className='h-180 w-[95vw] bg-[#144C3F] p-[10px] flex flex-wrap gap-5'>
          {bes.map(function(et,index){
            
          return (
        <Fema
        key={index}
        name={et.name}
        email={et.email}
        profession={et.text}
        url={et.number}
        bh={() => removeProfile(index)}
      
      



      />
    )
  })}
      </div>
      

      
      
 
    </div>
 
  )
}

export default App