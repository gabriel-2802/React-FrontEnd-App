import React from 'react'
import {Link } from 'react-router-dom'
import Banner from '../assets/home.avif'
import '../styles/Home.css'
import LoadingAnimation from '../components/LoadingAnimation'

function Home() {
	const [loading, setLoading] = React.useState(true)
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 150)

	}, []);

	if (loading) {
		return <LoadingAnimation />
	}

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
