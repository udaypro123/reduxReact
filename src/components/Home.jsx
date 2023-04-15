import React, { useState } from 'react'
import store from '../redux/store'
import Textdata from './Textdata'

const Home = () => {
  const [inputvalue,setinputvalue]=useState("")


const handledata=()=>{
  store.dispatch({
    type:"name",
    username:inputvalue,

  })
}
  return (
    <>
      <div className='homediv'>
        <input type="text" onChange={(e)=>{setinputvalue(e.target.value)}}/>
        <button onClick={handledata}> submit</button>
       
      </div>
      <div>
        <Textdata/>
      </div>
    </>
  )
}

export default Home
