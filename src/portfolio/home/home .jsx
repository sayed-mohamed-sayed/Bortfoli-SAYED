
import "./home.css"
import {BsFacebook, BsGithub, BsWhatsapp} from "react-icons/bs"
import {BsCardList} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import{useState ,useEffect} from "react"
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Home() {
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

    const [toggle,settoggle]=useState(false)
useEffect(()=>{
    Aos.init({duration:3000})
},[])

    return (
        <div className='home-portfolio ' >
            
<i className='toggle-1' style={{display:toggle&&"none" }} onClick={()=>settoggle(true)} ><BsCardList/></i>
<i className='toggle-2' style={{display:toggle&&"block" }} onClick={()=>settoggle(false)}>x</i>
            <div className="home-header" >
                <div className="box" >
            <div className="head" data-aos="zoom-in">
                <h1>S<span>A</span>YED MOH<span>A</span>MED</h1>
                <h2>Iam<span>front end developer</span>from cairo</h2>
            </div>
            <div className="nav">
<div className={!toggle?"navlink":"togglep"}>

           <ul data-aos="zoom-in">       
           {
            Head&&Head.map((i,o)=>(
                
                <li key={o}><NavLink to={`${i.link}`} key={o}>{i.title}</NavLink></li>
            ))
           }         
                
           </ul>
</div>

            </div>
<div className="icon" data-aos="zoom-in">
<i><BsFacebook/></i>
<i><BsWhatsapp/></i>
<i><BsGithub/></i>
<i><AiFillLinkedin/></i>
</div>

  <button className="download-cv" data-aos="zoom-in"><a href="./jss.pdf">Download Cv</a></button>
               
                </div>
            </div>
        </div>
    );
};

export default Home;






