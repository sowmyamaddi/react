import {useState} from'react'

function About(){
	const [country,setCountry]=useState("India");
	const [color,setColor]=useState("orange");
	const [village,setVillage]=useState("vizag")
	return(
		<div>
			<h1>{country}</h1>
			<h5>{color}</h5>
			<p>{village}</p>
			This is About page<br/>
			<input 
				onChange={(s)=>setColor(s.target.value)}/><br/>
			<input
				onChange={(a)=>setCountry(a.target.value)}/><br/>
			<button onClick={()=>console.log(color,country)}>Submit</button>
		</div>
	)
}
export default About