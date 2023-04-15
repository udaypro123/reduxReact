import React from 'react'
import {useSelector} from 'react-redux'
const Textdata = () => {
   const textdatas = useSelector((storedata)=>storedata)
   
  return (
    <div className='textdata'>
      {
        textdatas.name
      }
    </div>
  )
}

export default Textdata
