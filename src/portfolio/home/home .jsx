// @flow strict

import * as React from 'react';
import "./home.css"
import {BsFacebook} from "react-icons/bs"
import {BsCardList} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import{useState ,useEffect} from "react"
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Foter() {

    const [toggle,settoggle]=useState(false)
useEffect(()=>{
    Aos.init({duration:3000})
},[])

    return (
        <div className='home-portfolio ' >
            
<i className='toggle-1' style={{display:toggle&&"none" }} onClick={()=>settoggle(true)} ><BsCardList/></i>
<i className='toggle-2' style={{display:toggle&&"block" }} onClick={()=>settoggle(false)}>x</i>
            <div className="home-header" >
                <div className="box" >
            <div className="head" data-aos="zoom-in">
                <h1>S<span>A</span>YED MOH<span>A</span>MED</h1>
                <h2>Iam<span>front end developer</span>from cairo</h2>
            </div>
            <div className="nav">
<div className={!toggle?"navlink":"togglep"}>

           <ul data-aos="zoom-in">                
           <li><NavLink to="/" >HOME </NavLink></li>
                
                 
                <li><NavLink to="/about" d>ABOUT </NavLink></li>
               
                
                <li><NavLink to="/skills" > SKILLS</NavLink></li>
                
                
                <li><NavLink to="/progect" > PORTFOLIO</NavLink></li>
                
                
                <li><NavLink to="/contact" >CONTACT</NavLink></li>
           </ul>
</div>

            </div>
<div className="icon" data-aos="zoom-in">
    <i><AiFillLinkedin/></i>
    <i><BsFacebook/></i>
    <i><AiFillTwitterSquare/></i>
</div>

  <button className="download-cv" data-aos="zoom-in"><a href="./jss.pdf">Download Cv</a></button>
               
                </div>
            </div>
        </div>
    );
};

export default Foter;