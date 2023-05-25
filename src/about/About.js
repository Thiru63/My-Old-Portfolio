import React from "react";
import "./About.css";
import aboutImg from "../img/bg.png";
import Thirures from "./cv/Thiru-CV.pdf"
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I'm Thirumalai, I am currently pursuing B.sc  Computer Science final year
               in Alagappa university through distance education and I will be graduating in 2024.
               I have knowledge in React.js, Node.js, express.js, MongoDB, Java, SpringBoot, Git, GitHub, Postman &
               I have small  projects in above tools, I showcased them in below, hence I can work as Mern Stack
               Developer or Java Full Stack Developer. so I'm interested to start my journey as Entry level Full Stack
               Developer.
              </p>
              <p className="about__text p__color">
                Hence I'm looking for a job to enhance myself andalso I like to work for a company for it's growth.
                I'm looking for a Team to work because "TEAM WORK ONLY ALWAYS GIVES GREAT SUCCESS" . so I'm waiting 
                to work with such Team.
              </p>
              <p className="about__text p__color">
                Since I'm beginner, formostly looking for learning when working & I'm a fastlearner,
                I'm ready to chase my passion with irrespective of locations.
                Finally I'm passionate to Code...
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={Thirures} download>
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;