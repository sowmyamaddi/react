import{Link}from 'react-router-dom'
import '../App.css'

function Navbar(){
	return(
		<div className="nav">
			<Link to="/">Home</Link> &nbsp;
			<Link to="/contact">Contact</Link> &nbsp;
			<Link to="/about">About</Link>
		</div>
		)
}
export default Navbar