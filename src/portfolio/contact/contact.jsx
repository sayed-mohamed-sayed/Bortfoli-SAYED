// @flow strict
import "./contact.css"
import * as React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useState } from "react"
import Header from "../header/header";
function Contact() {


  
    return (
        <div className='home-contact'>
            <Header/>
            <div className="contact">
            <div className="img">
                {/* <img src="./2.jpeg" alt="" /> */}
            </div>
              
              <div className="contaner">
                <div className="header-contact">
                    <h6>contact</h6>
                    <h2>C<span>o</span>ntact <span>M</span>e</h2>
                </div>
                <div className="details">
              <div className="box1 box">
              <h2>MY ADRESS</h2>
              <h2>ABO HAMAD</h2>

              </div>
              <div className="box2 box">
              <h2>EMAIL ME</h2>
              <h2 className="email">sa3356139@gmail.com</h2>
              </div>
              <div className="box3 box">
              <h2>Social Profiles</h2>

              </div>
              <div className="box4 box">
              <h2>01018364752</h2>

              </div>

                </div>
              </div>

            </div>
        </div>
    );
};

export default Contact;