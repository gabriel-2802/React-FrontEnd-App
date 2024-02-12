import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
	const [openLinks, setOpenLinks] = useState(false)
	const toggleNavBar = () => {
		setOpenLinks(!openLinks)
	}
  return (
    <div className='navbar'>
    	<div className='leftSide' id={openLinks ? "open" : "close"}>
			<img src={Logo}/>
			<div className='hiddenLinks'>
			<Link to="/"> Home </Link>
			<Link to="/wars"> Wars </Link>
			<Link to="/about"> About </Link>
			<Link to="/contact"> Contact </Link>
			</div>
        </div>
        <div className='rightSide'>
			<Link to="/"> Home </Link>
			<Link to="/wars"> Wars </Link>
			<Link to="/about"> About </Link>
			<Link to="/contact"> Contact </Link>
			<button className='menu' onClick={toggleNavBar}> Menu </button>
			
		</div>
    </div>
  );
}

export default Navbar
