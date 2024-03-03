import "./skils.css"
import * as React from 'react';
import { useState } from "react"
import Header from "../header/header";
import Aos from 'aos';
import {FaJsSquare} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa6"
import {SiNextdotjs} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa6"
import {SiTailwindcss} from "react-icons/si"
import {ImHtmlFive2} from "react-icons/im"
import 'aos/dist/aos.css'
function Skils() {

    const [skill, setskill] = useState([
        {
            title:"Html",
            icon:<ImHtmlFive2/>,

        },
        {
            title:"Css",
            icon:<FaCss3Alt/>,

        },
        {
            title:"Js",
            icon:<FaJsSquare/>,

        },
        {
            title:"React js",
            icon:<FaReact/>,

        },
        {
            title:"Next js",
            icon:<SiNextdotjs/>,

        },
        {
            title:"TypeScript",
            icon:"ts",
            class:"type"

        },
        {
            title:"BootStrap",
            icon:<FaBootstrap/>,

        },
         {
            title:"TailwindCss",
            icon:<SiTailwindcss/>,

        },
        
        
    ])
   
    React.useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className='home-skils'>
            <Header/>
              <div className="img">
                {/* <img src="./2.jpeg" alt="no data" /> */}
            </div>
            <div className="contaner" data-aos="zoom-in">

           <div className="header">
               <h1>S<span>K</span>ILLs</h1>
           </div>
        <div className="box-skills" >

            {
                skill&&skill.map((i,o)=>(
                    <div className={`box ${i.class}`} key={o}>
<i>{i.icon}</i>
    <p>{i.title}</p>
</div>
                ))
            }
           

           </div>
            </div>
        </div>
    );
};

export default Skils;