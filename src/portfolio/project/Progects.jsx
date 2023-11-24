// @flow strict
import "./progect.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import Header from "../header/header";
function Progect() {


    const [togglecss, settogglecss] = useState(true)
    const [togglejs, settogglejs] = useState(false)
    const [togglereact, settogglereact] = useState(false)
    const toglecss=()=>{
        settogglecss(true)
        settogglejs(false)
        settogglereact(false)
    }
    const toglejs=()=>{
        settogglecss(false)
        settogglejs(true)
        settogglereact(false)
    }
    const toglereact=()=>{
        settogglecss(false)
        settogglejs(false)
        settogglereact(true)
    }
    return (
        <div className='home-progect'>
            <Header/>
            <div className="img">
                {/* <img src="./2.jpeg" alt="" /> */}
            </div>
            <div className="contaner">


                <div className="header">
                    <h3>
                        portfolio
                        <span>______</span>
                    </h3>
                    <h1>MY W<span>O</span>RK</h1>
                </div>
                <div className="boxs">
                <div className="titles"><h2 onClick={()=>toglecss()}>html-css</h2>
                <h2 onClick={()=>toglejs()}>html-css-js</h2>
                <h2 onClick={()=>toglereact()}>react js-type</h2>
                <h2 onClick={()=>toglereact()}>Nextjs-tailwind</h2>
                </div>
                {
                    togglecss&&

                    <div className="imgs">
                        <div className="box1 box">
                        <img src="./2.jpeg" alt="no data" />

                        </div>
                        <div className="box2 box">
                        <img src="./4.jpeg" alt="no data" />

                        </div>
                        <div className="box3 box">
                        <img src="./5.jpeg" alt="no data" />

                        </div>
                        <div className="box4 box">
                        <img src="./2.jpeg" alt="no data" />

                        </div>
                        <div className="box5 box">
                        <img src="./4.jpeg" alt="no data" />

                        </div>
                    </div>

                }
                 {
                    togglejs&&

                    <div className="imgs">
                    <div className="box1 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                    <div className="box2 box">
                    <img src="./4.jpeg" alt="no data" />

                    </div>
                    <div className="box3 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                    <div className="box4 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                    <div className="box5 box">
                    <img src="./4.jpeg" alt="no data" />

                    </div>
                </div>

                }
                 {
                    togglereact&&
                    <div className="imgs">
                    <div className="box1 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                    <div className="box2 box">
                    <img src="./4.jpeg" alt="no data" />

                    </div>
                    <div className="box3 box">
                    <img src="./5.jpeg" alt="no data" />

                    </div>
                    <div className="box4 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                    <div className="box5 box">
                    <img src="./2.jpeg" alt="no data" />

                    </div>
                </div>

                }
                </div>
            </div>
        </div>
    );
};

export default Progect;