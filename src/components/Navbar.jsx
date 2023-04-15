import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='navabr'>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
      </div>
    </>
  )
}

export default Navbar
