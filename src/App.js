//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import React from'react'
/*import DemoExample from './DemoExample'
import Events from './Events'*/
//import JSX from './JSX'
//import StateExample from './StateExample'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route}from'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'


function App(){
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
               <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>

         </Routes>
    </BrowserRouter>

      {/*<StateExample/>
      <JSX/>
      <Events/>
      <DemoExample prize="1st prize"/>
      <PropsExample name="jyothi" age="20"/>
      <FuncProps carname="rolls royce" year="2000"/>
      <h1>Hello</h1>
      <PropsExample name="hari" age="10"/>
      <p>Good afternoon</p>
      <h1>Heading tag</h1>
      <img src="https://media.istockphoto.com/id/919525342/photo/taj-mahal-in-agra-india-in-the-light-of-the-full-moon.jpg?s=612x612&w=0&k=20&c=y9sk_Gwnur6R_nFzgKAJEdu3_9iJzJiFkEUfp9pxX1c=" alt="Taj mahal"/>
      <ClassComponent/>*/}
    </div>
  )
}
export default App

