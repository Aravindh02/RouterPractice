import React from 'react'

import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div> <Link to="Home">Home</Link></div>
        <div><Link to="Contact">Contact</Link></div> 
        <div><Link to="ContactAdd">ContactAdd</Link></div>
        <div><Link to="ContactEdit">ContactEdit</Link></div>
    </div>
       
        
    </div>
  )
}

export default Navbar