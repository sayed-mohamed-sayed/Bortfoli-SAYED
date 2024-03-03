import "./progect.css";
import * as React from "react";
import { useState } from "react";
import Header from "../header/header";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Progect() {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [data, setdata] = useState([
    {
      id: 1,
      img: "./doctor.jpeg",
      title: "html -css -js",
      url: "https://progect-doctor.vercel.app/",
    },
    {
      id: 2,
      img: "./pookshop.jpeg",
      title: "html -css -js",
      url: "https://pook-shoop.vercel.app/",
    },
    {
      id: 3,
      img: "./shopping.jpeg",
      title: "React js",
      url: "https://shopping-1.vercel.app/",
    },
    {
      id: 4,
      img: "./shopping5.jpg",
      title: "Next js -ts -tailwind css",
      url: "https://shoopingcart2.vercel.app/",
    },
    {
      id: 5,
      img: "./edcut.jpeg",
      title: "Next js -tailwind css",
      url: "https://educational-site-umber.vercel.app/",
    },
    {
      id: 6,
      img: "./furnuter.jpeg",
      title: "Next js -tailwind",
      url: "https://shopping-wood.vercel.app/",
    },
  ]);

  return (
    <div className="home-progect">
      <Header />
      <div className="img">{/* <img src="./2.jpeg" alt="" /> */}</div>
      <div className="contaner" data-aos="zoom-in">
        <div className="header">
          <h3>
            portfolio
            <span>______</span>
          </h3>
          <h1>
            MY W<span>O</span>RK
          </h1>
        </div>
        <div className="boxs">
          <div className="imgs">
            {data &&
              data.map((i) => (
                <div key={i.id} className=" box">
                  <div className="Link">
                    <Link to={i.url}></Link>
                  </div>

                  <img src={i.img} alt="no data" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progect;
