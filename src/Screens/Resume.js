import React from "react"
import "../Resume.css";
import Arman from"../Images/arman.png"
import Nav from "./Nav";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import GitHubIcon from "@mui/icons-material/GitHub"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PhoneIcon from "@mui/icons-material/Phone"
import LinkIcon from "@mui/icons-material/Link"
 const Resume = ()=>{
    return(
    <div className="resume-container">
            {/* <Nav/> */}
        <div className="resume">
        <div className="resume-left">
            <div className="resume-img">
                <img src={Arman} alt="my image"/>
                <p> Arman Grema</p>
            </div>

            <div className="my-info">
                <div className="composer"> 
                    <div><PhoneIcon/>phone</div>
                    <div>+2347011911909</div>
            </div>

            <div className="composer"> 
                    <div><AlternateEmailIcon/>email</div>
                    <div>abdurrahmangrema19@gmail.com</div>
            </div>

            <div className="composer"> 
                    <div><LinkedInIcon/>LinkedIn</div>
                    <div><a href="https://www.linkedin.com/in/arman-grema-6669341bb">Arman Grema</a></div>
            </div>

            <div className="composer"> 
                    <div><LinkIcon/>website</div>
                    <div>www.armangrema.com</div>
            </div>

            <div className="composer"> 
                    <div> <GitHubIcon/>github</div>
                    <div>www.github.com/armanvirus</div>
            </div>

            <div className="composer"> 
                    <div><MyLocationIcon/>Address</div>
                    <div>Hammadu kafi Near byepass road Gombe, Gombe State Nigeria</div>
            </div>
            </div>
            
        </div>


        <div className="resume-right">
            <div className="brife-me">
                <h3>ARMAN GREMA</h3>
                <div>A FULLSTACK FREELANCE WEB DEVELOPER</div>
            </div>

            <div className="resume-about-me">
                <h4>ABOUT ME</h4>
                <p>Since 2017/2018, I've been passionately navigating the 
                    MERN stack landscape. With years of expertise, I specialize 
                    in molding MongoDB, Express.js, React, and 
                    Node.js into powerful web applications.
                     My journey has been one of 
                    constant growth, resulting in finely tuned 
                    skills that bring seamless, dynamic user experiences to life.</p>
            </div>
            <div className="works">
                <div className="connector-line"></div>
                <div className="work-info">
                    <div className="work">
                        <div className="connector-circle"></div>
                        <div>
                            <h4>EDUCATION</h4>
                            <div className="edu">
                                <div> 
                                    <div className="dats">2017-now</div>
                                    <div className="edu-desc"><strong>Self Taught</strong> Self-taught since 2017, evolving relentlessly.
                                     From basics to mastery, a journey marked by continuous growth and coding prowess.</div>
                                </div>
                                <div> 
                                        <div className="dats">2019-Now</div>
                                        <div className="edu-desc"> <strong>University of Maiduguri-</strong>
                                        Since 2019, my University of Maiduguri electrical 
                                        engineering journey has been illuminating.
                                         From theoretical foundations to practical applications, 
                                        I've thrived on challenges, honing skills that fuse 
                                        innovation with technical expertise.</div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <div className="connector-circle"></div>
                        <div>
                            <h4>BASIC SKILLS</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootsrap</li>
                                <li>Taildwind</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT</li>
                                <li>Vue</li>
                                <li>React Native</li>
                                <li>Ionic</li>
                                <li>NODEJS</li>
                                <li>MONGODB</li>
                                <li>PYTHON</li>
                            </ul>
                        </div>
                    </div>

                    <div className="work">
                            <div className="connector-circle"></div>
                            <div>
                                <h4>EXPERIANCE</h4>
                                <div className="edu">
                                    <div> 
                                        <div className="dats">2018-2021</div>
                                        <div className="edu-desc"> A local freelance web developer</div>
                                    </div>
                                </div>
                                <div className="edu">
                                    <div> 
                                        <div className="dats">2022-2023</div>
                                        <div className="edu-desc"> Intern At DOPALS TECHNLOGIES</div>
                                    </div>
                                </div>
                                <div className="edu">
                                    <div> 
                                        <div className="dats">2023-Now</div>
                                        <div className="edu-desc"> MERN Dev At Strano.io</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>       
        </div>
    </div>
    </div>
    </div>
    )
}

export default Resume;
