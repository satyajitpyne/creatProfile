import React from 'react'
import { useParams } from 'react-router-dom'

const Men = () => {
    const vg = useParams()
    console.log(vg.id)
  return (
    <div className='text-3xl underline font-semibold absolute top-1/2 left-1/2'> {vg.id}Men t-shirt</div>
  )
}

export default Men