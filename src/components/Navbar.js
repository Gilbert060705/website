import React from 'react'
import Logo from '../img/ntusu.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}/>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/mytasks"> My Tasks </Link>
        <Link to="/info"> Info </Link>
      </div>
    </div>
  )
}

export default Navbar