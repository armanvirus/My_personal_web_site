import React, { useState,useEffect, useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import Mui from "../Mui";
import "../HomeRight.css";
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
import InstagramIcon from "@mui/icons-material/Instagram"
import TelegramIcon from "@mui/icons-material/Telegram"
import TwitterIcon from "@mui/icons-material/Twitter"
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import BrushIcon from "@mui/icons-material/Brush";
import ArrowForwadIosIcon from "@mui/icons-material/ArrowForwardIos";


function HomeRight(props) {
   console.log(props.determiner)

   const leftleft = useRef();
   const lefti = useRef();
        const entery = ()=>{
            // gsap.to(leftleft.current,{position:'fixed'})
        }
    
        
        gsap.registerPlugin(ScrollTrigger); 
        useEffect(()=>{
        },[''])
   
  return (
    <div onMouseEnter={entery} className="HomeRight">
    <div ref={leftleft}  className="MT">
    <div className="test">
         <div className="HomeRightLeft">
            <div className="HomeIcon">
                <HomeIcon/>
            </div>
u  
    {/* <Mui/> */}
            <div className="NavIcons">
                 <a href="/"> <AccountBoxIcon/></a>
                 <a href="/"> <WorkIcon/> </a>
                 <a href="/"> <CollectionsBookmarkIcon/> </a>             
                 <a href="/"> <DescriptionIcon/></a>
                 {/* <a href="/"></a> */}
                 <a href="/"> <ContactPageIcon/></a>
            </div>

            <div className="downloadIcon">
                <CloudDownloadIcon/>
            </div>
         </div>

         <div className="HomeRightMid">

              <div  data-aos-duration='500' className="midImg">
                  <img src={Aminu} alt="Mr Arman"/>
              </div>

              <div className="midNav">
                  <div className="n">Arman Grema</div>
                  <span className="stack">Developer</span>
                  <div className="socialIcons">
                      <a href="/"> <FacebookIcon/></a>
                      <a href="/">  <InstagramIcon/></a>
                      <a href="/"> <TelegramIcon/></a>
                      <a href="/"> <TwitterIcon/></a>
                  </div>

              </div>

         </div>
         </div>
         </div>

         

         <div className={props.determiner}>
              <div className='MidAbout'>
                <h3>About Me</h3>
                <div>
                manifest.json provides metadata used when 
                your web app is installed on a
                user's mobile device or desktop 
                json provides metadata used when 
                your web app is installed on a
                
                
                </div>
                <a className="primaryBtn" href="/"> READ MORE</a>
              </div>

              <div className="MidServices">
              <h2  className="MidS">Services I Offer</h2>
                    <div className="card-holder">
                        <div className="card">
                           <div> <BrushIcon  sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                             <div><h4>Graphics Design</h4>
                            <p>manifest.json provides metadata used when 
                            your web app is installed on a
                            user's mobile device or desktop</p>
                            </div>
                        </div>
                        <div className="card">
                       <div> <DesktopWindowsOutlinedIcon sx={{fontSize:30, color:"rgb(8, 215 ,87)"}}/> </div>
                            <div><h4>Web Development</h4>
                            <p>manifest.json provides metadata used when 
                            your web app is installed on a
                            user's mobile device or desktop</p>
                            </div>
                        </div>
                    </div>
                    <div ref={lefti} className="card-holder">
                    <div className="card">
                           <div> <PhoneIphoneOutlinedIcon sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                             <div> <h4>Mobile development</h4>
                              <p>manifest.json provides metadata used when 
                              your web app is installed on a
                              user's mobile device or desktop</p>
                              </div>
                        </div>

                        <div className="card">
                            <div><LayersIcon sx={{fontSize:35, color:"rgb(8, 215 ,87)"}}/> </div>
                              <div>
                                <h4>Database Architecture</h4>
                                <p>manifest.json provides metadata used when 
                                your web app is installed on a
                                user's mobile device or desktop</p>
                              </div>
                        </div>
                    </div>

              </div>
         </div>
      </div>
  );
}

export default HomeRight;
