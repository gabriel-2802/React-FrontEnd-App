import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 	Home from "./pages/Home"
import Wars from "./pages/Wars"
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
	<>
	<div className="App">
    	<Router>
			<Navbar />
			<Routes>
				<Route path="/" exact Component={Home}></Route>
				<Route path="/wars" exact Component={Wars}></Route>
				<Route path="/about" exact Component={About}></Route>
				<Route path="/contact" exact Component={Contact}></Route>
			</Routes>
			<Footer />
      </Router>
    </div>
	</>
  );
}

export default App;
