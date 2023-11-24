// @flow strict
import "./skils.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import Header from "../header/header";

function Skils() {


    const [toggle, settoggle] = useState(false)
    return (
        <div className='home-skils'>
            <Header/>
              <div className="img">
                <img src="./2.jpeg" alt="no data" />
            </div>
            <div className="contaner">

           <div className="header">
               <h1>S<span>K</span>ILLs</h1>
           </div>
           <div className="skil">
           <div className="box1 box">
<h3>HTML</h3>            
               <div className="animtion"> </div>
           </div>
           <div className="box2 box">css
           
           <div className="animtion"> </div>
</div>
           <div className="box3 box">js
           <div className="animtion"> </div>

           </div>
           <div className="box4 box">react js
           <div className="animtion"> </div>

           </div>
           <div className="box5 box">pootstrap
           
           <div className="animtion"> </div>

           </div>
               
           </div>
            </div>
        </div>
    );
};

export default Skils;