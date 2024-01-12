import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-evenly mt-5'>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="Product/dfasdhfhhgahdglkhadlkg">Product</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav