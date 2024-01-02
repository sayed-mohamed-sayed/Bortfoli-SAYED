// @flow strict
import "./progect.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import Header from "../header/header";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
function Progect() {

    React.useEffect(()=>{
        Aos.init({duration:3000})
    },[])

    const [togglecss, settogglecss] = useState(true)
    const [togglejs, settogglejs] = useState(false)
    const [togglereact, settogglereact] = useState(false)
    const [data, setdata] = useState([
        {
            id:1,
            img:"./doctor.jpeg",
            title:"html -css -js",
            url:"https://progect-doctor.vercel.app/",
        }, {
            id:2,
            img:"./pookshop.jpeg",
            title:"html -css -js",
            url:"https://pook-shoop.vercel.app/",
        }, {
            id:3,
            img:"./shopping.jpeg",
            title:"React js",
            url:"https://shopping-1.vercel.app/",
        }, {
            id:4,
            img:"./edcut.jpeg",
            title:"Next js -ts -tailwind css",
            url:"https://educational-site-one.vercel.app/",
        }, {
            id:5,
            img:"./pookshop.jpeg",
            title:"Next js -tailwind css",
            url:"Next js -tailwind",
        }, {
            id:6,
            img:"./doctor.jpeg",
            title:"Next js -tailwind",
            url:"localljo",
        },
    ])
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
            <div className="contaner" data-aos="zoom-in">


                <div className="header">
                    <h3>
                        portfolio
                        <span>______</span>
                    </h3>
                    <h1>MY W<span>O</span>RK</h1>
                </div>
                <div className="boxs">
                <div className="imgs">
                    {
                        data&&data.map((i)=>(
                            <div key={i.id} className=" box">
<div className="Link">
<Link to={i.url}></Link>

</div>

  <img src={i.img} alt="no data" />
                        

{/* <p>{i.title}</p> */}
            
                        </div>
                        ))
                    }
                    </div>
                {/* <div className="titles"><h2 onClick={()=>toglecss()}>html-css</h2>
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
                        <div className="box6 box">
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

                } */}

                </div>
            </div>
        </div>
    );
};

export default Progect;