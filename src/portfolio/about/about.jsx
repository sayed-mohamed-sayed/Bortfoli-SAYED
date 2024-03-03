import "./about.css"
import {BsFacebook} from "react-icons/bs"
import {BsCardList} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import{useState ,useEffect} from "react"
import Header from "../header/header";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Foter() {


    const [toggle,settoggle]=useState(false)
    const [name ,setname]=useState("Front Developer")
    const [slicename ,setslicename]=useState("")
useEffect(()=>{
setTimeout(() => {
    setslicename(name.slice(0,slicename.length+1))
   
        Aos.init({duration:3000})
    
}, 400);

},[slicename])

    return (
        <>
        <div className='home-about' >
            <Header/>
            <div className="about" data-aos="zoom-in">
                <div className="about-learn">
                    <h4>About</h4>
                    <h1><span>L</span>EARN MORE ABOUT ME</h1>
                </div>
                <div className="contaner">

                <div className="box-1">
                    <img src="./4.jpeg" alt="no Data" />
                </div>
                <div className="box-2">
                    <h1>{slicename}</h1>
                    <p><span>></span> Birthday:1 /6/2000</p>
                    <p><span>></span>Phone: 01018364752</p>
                    <p><span>></span>City:Cairo</p>
                    <p><span>></span>ABO HAMAD</p>
                </div>
                </div>
        </div>
            </div>
        </>
    );
};

export default Foter;