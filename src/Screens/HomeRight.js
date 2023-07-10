import React, { useState,useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import Mui from "../Mui";
import "../HomeRight.css";
import Ratings from "./Ratings"
import Resume from './Resume'
import Contact from "./Contact"
import Aminu from"../Images/Aminu.png";
import E3 from"../Images/E3.JPG";
import E2 from"../Images/E2.JPG";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactPageIcon from "@mui/icons-material/ContactPage"
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import BrushIcon from "@mui/icons-material/Brush";
import ArrowForwadIosIcon from "@mui/icons-material/ArrowForwardIos";



function HomeRight(props) {
   console.log(props.determiner)

   const rightleft = useRef();
   const lefti = useRef();
   const psedoRef = useRef();
        const entery = ()=>{
            // gsap.to(rightleft.current,{position:'fixed', duration:1.1});
            // gsap.to(psedoRef.current,{display:"block"})
        }
    
        
        gsap.registerPlugin(ScrollTrigger); 
        useEffect(()=>{
        },[''])
   
  return (
    <div  className="HomeRight">
    <div ref={rightleft}  className="MT">
    <div className="test">
         <div className="HomeRightLeft">
            <div className="HomeIcon">
               <Link to="/"> <HomeIcon/> </Link>
            </div>
 
    {/* <Mui/> */}
            <div className="NavIcons">
                 <Link to="/#about"> <AccountBoxIcon/></Link>
                 <Link to="/"> <WorkIcon/> </Link>
                 <Link to="/projects"> <CollectionsBookmarkIcon/> </Link>             
                 <Link to="/resume"> <DescriptionIcon/></Link>
                 {/* <a href="/"></a> */}
                 <Link to="/contact"> <ContactPageIcon/></Link>
            </div>

            <div className="downloadIcon">
               <a href="/"> <CloudDownloadIcon/> </a>
            </div>
         </div>

         <div className="HomeRightMid">

              <div  className="midImg">
                  <img src={Aminu} alt="Mr Arman"/>
              </div>

              <div className="midNav">
                  <div className="n">Arman Grema</div>
                  <span className="stack">Developer</span>
                  <div className="socialIcons">
                      <a href="https://facebook.com/arman.gremaviruse" target="_blank"> <FacebookIcon/></a>
                      <a href="https://github.com/armanvirus" target="_blank">  <GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/arman-grema-6669341bb" target="_blank"> <LinkedInIcon/></a>
                      <a href="https://twitter.com/armanviruse?s=09" target="_blank"> <TwitterIcon/></a>
                      
                  </div>

              </div>

         </div>
         </div>
         </div>

         {/* <div ref={psedoRef} className="psedo-adjusta"></div> */}
         <div className="bridge"></div>

         <div className="whole">
              <div id="about" className='MidAbout'>
                <h3>About Me</h3>
                <div>
                
                Im Arman Grema,
                Im a self taught Fullstack web developer with 4yrs+ of frontend
                development experiance and 2yrs of backend coding experiance.
                
                </div>
                <Link className="primaryBtn" to="/about"> READ MORE</Link>
              </div>

              <div id="services" className="MidServices">
              <h2  className="MidS">Services I Offer</h2>
                    <div className="card-holder">
                        <div className="card">
                           <div> <BrushIcon  sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                             <div><h4>Graphics Design</h4>
                            <p>
                            Need a logo, flyer, cover page, or UI/UX design
                            for your brand? you are at the rigth flatform, 
                            just hire me, i am
                            here to serve your needs.  
                            </p>
                            </div>
                        </div>
                        <div className="card">
                       <div> <DesktopWindowsOutlinedIcon sx={{fontSize:30, color:"rgb(8, 215 ,87)"}}/> </div>
                            <div><h4>Web Development</h4>
                            <p>I offer best web development services 
                                both frontend and backend, have contract with 
                                me to get a efficient app coded with clean, dry and well commented
                                codes.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div ref={lefti} className="card-holder">
                    <div className="card">
                           <div> <PhoneIphoneOutlinedIcon sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                             <div> <h4>Mobile development</h4>
                              <p>Have your Android/Ios app built, with best 
                                  feartures best working efficiency with React Native,
                                  the porpular cross-flatform mobile development Liberary.
                              </p>
                              </div>
                        </div>

                        <div className="card">
                            <div><LayersIcon sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                              <div>
                                <h4>Database Architecture</h4>
                                <p>When your Site grows your data also grows as well and 
                                    and things get complicated, am here to take away that pain from 
                                    you. just hire me, its my honor to satisfy your needs.
                                </p>
                              </div>
                        </div>
                    </div>
                        <Link className="primaryBtn hire" to="/contact"> HIRE ME</Link>

                        <div className="staks">
                                <h2>Stacks</h2>
                                <p>Here are languages,liberaries and frameworks <br/> i frequently use.
                                </p>
                            <div className="staks-row-1">
                                <div className="stak">JavaScript</div>
                                <div className="stak">Python</div>
                                <div className="stak">Reactjs</div>
                                <div className="stak">Vuejs</div>
                            </div>
                            <div className="staks-row-1">
                                <div className="stak">Nodejs</div>
                                <div className="stak">Expressjs</div>
                                <div className="stak">Mongodb</div>
                                <div className="stak">MySql</div>
                            </div>
                            <div>
                            <Ratings/>
                            </div>
                            <h2 className="tools">Tools</h2>
                                <p>
                                    Here are languages,liberaries and frameworks <br/> i frequently use.
                                </p>
                            <div className="staks-row-1">
                                <div className="stak">Github</div>
                                <div className="stak">Postman</div>
                                <div className="stak">Gitlab</div>
                                <div className="stak">Jupyter note book</div>
                            </div>
                        </div>
                           <div className="resume-embed"> 
                               <Resume/> 
                            </div>
                            <Contact/>
              </div>
         </div>
      </div>
  );
}

export default HomeRight;
