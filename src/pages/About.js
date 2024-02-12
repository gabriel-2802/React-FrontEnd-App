import React from 'react'
import Napoleon from '../assets/napoleon3.jpg'
import '../styles/About.css'
import LoadingAnimation from '../components/LoadingAnimation'

function About() {
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
	<div className='about'>
		<div className='aboutTop' style={{backgroundImage:`url(${Napoleon})`}}>
		  
		</div>
		<div className='aboutBottom'>
		  <h1> Napoleon Bonaparte </h1>
		  <p className='info'> 
		  	<p> Născut în Corsica și specializat pe profilul de ofițer de artilerie în Franța continentală, Bonaparte a devenit cunoscut în timpul Primei Republici Franceze și a condus campanii reușite împotriva Primei și celei de-a Doua Coaliții, care luptau împotriva Franței. În 1799 a organizat o lovitură de stat și s-a proclamat Prim Consul; cinci ani mai târziu s-a încoronat ca Împărat al francezilor. În primul deceniu al secolului al XIX-lea a opus armatele Imperiului Francez împotriva fiecărei puteri majore europene și a dominat Europa continentală printr-o serie de victorii militare. A menținut sfera de influență a Franței prin constituirea unor alianțe extensive și prin numirea prietenilor și membrilor familiei în calitate de conducători ai altor țări europene sub forma unor state clientelare franceze </p>
			<p> Invazia franceză a Rusiei din 1812 a marcat un punct de cotitură în destinul lui Napoleon. Marea sa Armată a suferit pierderi covârșitoare în timpul campaniei și nu s-a recuperat niciodată pe deplin. În 1813, a Șasea Coaliție l-a înfrânt la Leipzig; în anul următor Coaliția a invadat Franța, l-a forțat pe Napoleon să abdice și l-a exilat pe insula Elba. În mai puțin de un an, a scăpat de pe Elba și s-a întors la putere, însă a fost învins în bătălia de la Waterloo din iunie 1815. Napoleon și-a petrecut ultimii șase ani ai vieții sub supraveghere britanică pe insula Sfânta Elena. O autopsie a concluzionat că a murit de cancer la stomac, deși Sten Forshufvud și alți oameni de știință au continuat să susțină că a fost otrăvit cu arsenic. </p>
			<p> Conflictul cu restul Europei a condus la o perioadă de război total de-a lungul continentului, iar campaniile sale sunt studiate la academii militare din întreaga lume. Deși considerat un tiran de către oponenții săi, el a rămas în istorie și datorită creării Codului Napoleonian, care a pus fundațiile legislației administrative și judiciare în majoritatea țărilor Europei de Vest. </p>
		  </p>

		</div>
	</div>
  )
}

export default About
