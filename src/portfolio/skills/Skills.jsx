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

    const [toggle, settoggle] = useState(false)
    const [data, setdata] = useState([
        {
            id:1 ,
            img:"./html.png"
        },  {
            id:2 ,
            img:"./css.png"
        },  {
            id:3 ,
            img:"./js.png"
        },  {
            id:4 ,
            img:"./react.png"
        },  {
            id:5 ,
            img:"./html.png"
        },  {
            id:6 ,
            img:"./tailwinds.jpg"
        },  {
            id:7 ,
            img:"./js.png"
        },  {
            id:8 ,
            img:"./html.png"
        },
    ])
    setTimeout(() => {
        settoggle(true)
    }, 500);

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
<div className="box">
    <i><ImHtmlFive2/></i>
    <p>Html</p>
</div>
<div className="box"> <i><FaCss3Alt/></i>
    <p>Css</p></div>
<div className="box"> <i><FaJsSquare/></i>
    <p>Js</p></div>
<div className="box">
<i><FaReact/></i>
    <p>React</p>
</div>
<div className="box">
<i><SiNextdotjs/></i>
    <p>Next</p>
</div>
<div className="box t">
<i>ts</i>
    <p>TypeScript</p>
</div>
<div className="box">
<i><FaBootstrap/></i>
    <p>BootStrap</p>
</div>
<div className="box">
<i><SiTailwindcss/></i>
    <p>TailwindCss</p>
</div>
            {/* {
                data&&data.map((i)=>(
                    <div key={i.id} className="box">
                        <div className="imgs">
                            <img src={i.img} alt="image"  />
                        </div>
                    </div>
                ))
            } */}
           

           </div>
            </div>
        </div>
    );
};

export default Skils;