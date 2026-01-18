import React from 'react'

const Female = ({key, name, email, profession, url,bh }) => {
  return (
    <div id={key} className='h-70 w-[15vw] lg:bg-[yellow] bg-[white] rounded-lg flex items-center flex-col gap-[3px] text-center'>
    
      <img className='h-18 w-18 rounded-4xl mt-2' src={url} alt="" />
      <h1 className='text-xl font-bold'>{name}</h1>
      <h2 className='font-semibold text-blue-500'>{profession}</h2>

      <p>Lorem ipsum dolor, sit amet consectetur <span className='text-[blue]'>{email}</span> .</p>
      <button className='active: scale-98 bg-red-500 text-[white] h-7 w-19 cursor-pointer texl-lg'
      onClick={function(){
        bh()
      }} 
      > Remove</button>
      </div>

  )
}

export default Female