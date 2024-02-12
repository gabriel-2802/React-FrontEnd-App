import React from 'react'
import {Link } from 'react-router-dom'
import Banner from '../assets/home.avif'
import '../styles/Home.css'

function Home() {
  return (
	<div>
		<div className='home' style ={{backgroundImage: `url(${Banner})`}}>
			<div className='headerContainer'>
				<h1> The Napoleonic Wars</h1>
				<p> "History is a set of lies agreed upon."</p>
			</div>

		</div>
	</div>
  )
}

export default Home
