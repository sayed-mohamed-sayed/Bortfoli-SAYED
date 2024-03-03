import "./header.css"
import * as React from 'react';
import { BsCardList } from "react-icons/bs"
import { useState } from "react"
import { NavLink } from "react-router-dom";

function Header() {


    const [toggle, settoggle] = useState(false)
    const [Head ,setHead]=useState([
        {
            title:"HOME",
            link:"/"   
           },
           {
            title:"ABOUT",
            link:"/about"   
           },
           {
            title:"SKILLS",
            link:"/skills"   
           },   
           {
            title:"PORTFOLIO",
            link:"/progect"   
           },
           {
            title:"CONTACT",
            link:"/contact"   
           },
                                    
    ])
    return (
        <div className="home-headers">

<i className='toggle-1' style={{display:toggle&&"none" }} onClick={()=>settoggle(true)} ><BsCardList/></i>
<i className='toggle-2' style={{display:toggle&&"block" }} onClick={()=>settoggle(false)}>x</i>

        <div className={toggle?"headerport togle" :"headerport"}>
            <div className="headname">
                <h2><span>S</span>AYED M<span>O</span>HAMED</h2>
            </div>
         <nav>
             <ul className="nav-link">
                 
             {
            Head&&Head.map((i,o)=>(
                
                <li key={o}><NavLink to={`${i.link}`} key={o}>{i.title}</NavLink></li>
            ))
           }      
             </ul>
         </nav>
        </div>
        </div>
    );
};

export default Header;