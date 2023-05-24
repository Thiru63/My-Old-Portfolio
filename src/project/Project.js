import React from "react";
import "./Project.css";
import Project1 from '../img/portfolio-1.jpg';
import Project2 from '../img/portfolio-2.jpg';
import Project3 from '../img/portfolio-3.jpg';
import { HiExternalLink } from "react-icons/hi";

// import Project4 from '../img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          I have small projects in MERN Stack Development &
          Java-Springboot-Mongodb-React Full Stack Development
        </p>
        <p className="heading p__color">
          but I'm waiting for Realtime Work Experience 
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img width="250" height="232" src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">ReactRedux-MoviesApp</h4>
                     <h6 className="project__text">Tools: React, Redux</h6>
                     <a href="https://github.com/Thiru63/react-redux-moviapp" target="_blank" rel="noreferrer" className="project__btn">Source Code-GitHubLink<HiExternalLink/></a>
                     <a href="https://reactredux-movieapp.netlify.app/" target="_blank" rel="noreferrer" className="project__btn">DeploymentLink<HiExternalLink/></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img  src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">MernStack-GoalSetterApp</h4>
                     <h6 className="project__text">Tools: React, Redux, Node.js, express.js, MongoDB</h6>
                     <a href="https://github.com/Thiru63/mern-goalsetterapp" target="_blank" rel="noreferrer" className="project__btn">Source Code-GitHubLink<HiExternalLink/></a>
                     <a href="https://mern-goalsetterapp.netlify.app" target="_blank" rel="noreferrer" className="project__btn">DeploymentLink-Frontend<HiExternalLink/></a>
                     <a href="https://goal-setter-appp.onrender.com" target="_blank" rel="noreferrer" className="project__btn">DeploymentLink-Backend<HiExternalLink/></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">JavaSpringBootMongodb<br></br>ReactFullStack-MoviesApp</h4>
                     <h6 className="project__text">Tools: React, Redux, Java, SpringBoot, MongoDB</h6>
                     <a href="https://github.com/Thiru63/javaSpringBootMongodbReact-moviesappFrontend" target="_blank" rel="noreferrer" className="project__btn">Source Code-GitHubLink-Frontend<HiExternalLink/></a>
                     <a href="https://github.com/Thiru63/javaSpringBootMongodbReact-moviesappBackend" target="_blank" rel="noreferrer" className="project__btn">Source Code-GitHubLink-Backend<HiExternalLink/></a>
                     <a href="https://javaspringbootmongoreact-moviesapp.netlify.app/" target="_blank" rel="noreferrer" className="project__btn">DeploymentLink-Frontend<HiExternalLink/></a>
                     <a href="https://javamoviesapp.azurewebsites.net" target="_blank" rel="noreferrer" className="project__btn">DeploymentLink-Backend<HiExternalLink/></a>
                     </div>
                 </div>
             </div>


             {/* <div className="col__3"> */}
                 {/* <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div> */}
             {/* </div> */}


             {/* <div className="col__3"> */}
                 {/* <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div> */}
             {/* </div> */}


             {/* <div className="col__3"> */}
                 {/* <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div> */}
             {/* </div> */}
             
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;