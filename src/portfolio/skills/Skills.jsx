// // @flow strict
// import "./skils.css"
// import * as React from 'react';
// import { BsFacebook } from "react-icons/bs"
// import { BsCardList } from "react-icons/bs"
// import { AiFillLinkedin } from "react-icons/ai"
// import { AiFillTwitterSquare } from "react-icons/ai"
// import { useState } from "react"
// import Header from "../header/header";

// function Skils() {

//     const [toggle, settoggle] = useState(false)
//     setTimeout(() => {
//         settoggle(true)
//     }, 500);
//     return (
//         <div className='home-skils'>
//             <Header/>
//               <div className="img">
//                 <img src="./2.jpeg" alt="no data" />
//             </div>
//             <div className="contaner">

//            <div className="header">
//                <h1>S<span>K</span>ILLs</h1>
//            </div>
//            <div className="skil">
             

//     <div className="boxskil" > <span className={toggle&& "span"} style={{width:toggle?"90%":"0px" }}><h4 >Html</h4></span > </div>
//     <div className="boxskil" > <span className={toggle&& "span"} style={{width:toggle?"85%":"0px" }}><h4 >css</h4></span > </div>
//     <div className="boxskil" > <span className={toggle&& "span"} style={{width:toggle?"80%":"0px" }}><h4 >js</h4></span> </div>
//     <div className="boxskil" > <span className={toggle&& "span"} style={{width:toggle?"70%":"0px"}}><h4 >pootstrap</h4></span> </div>
//     <div className="boxskil" > <span className={toggle&& "span"} style={{width:toggle?"60%":"0px" }}><h4 >reactjs</h4></span> </div>


//            </div>
//             </div>
//         </div>
//     );
// };

// export default Skils;






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
    return (
        <div className='home-skils'>
            <Header/>
              <div className="img">
                {/* <img src="./2.jpeg" alt="no data" /> */}
            </div>
            <div className="contaner">

           <div className="header">
               <h1>S<span>K</span>ILLs</h1>
           </div>
             
        <div className="box-skills">
            {
                data&&data.map((i)=>(
                    <div key={i.id} className="box">
                        <div className="imgs">
                            <img src={i.img} alt="image"  />
                        </div>
                    </div>
                ))
            }
           

           </div>
            </div>
        </div>
    );
};

export default Skils;