// @flow strict
import "./contact.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import Header from "../header/header";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Contact() {

  React.useEffect(()=>{
    Aos.init({duration:3000})
},[])

  
    return (
        <div className='home-contact'>
            <Header/>
            <div className="contact">
            <div className="img">
            </div>
              
              <div className="contaner" data-aos="zoom-in" >
                <div className="header-contact">
                    <h3>contact</h3>
                    <h2>C<span>o</span>ntact <span>M</span>e</h2>
                </div>
                <div className="details" >
              <div className="box1 box" >
              <h1>MY ADRESS</h1>
              <h2>ABO HAMAD</h2>

              </div>
              <div className="box2 box">
              <h1>EMAIL ME</h1>
              <h2 className="email">sa3356139@gmail.com</h2>
              </div>
              <div className="box3 box">
              <h1>Social Profiles</h1>
              <div className="icon">
<i><BsFacebook/></i>
<i><AiFillLinkedin/></i>
<i><AiFillTwitterSquare/></i>
              </div>
              </div>
              <div className="box4 box">
                <h1>CALL ME</h1>
              <h2>01018364752</h2>

              </div>

                </div>
              </div>

            </div>
        </div>
    );
};

export default Contact;