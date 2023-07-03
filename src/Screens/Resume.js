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
                <p>Im Arman Grema, Im a self taught Fullstack 
                    web developer with 4yrs+ of frontend development 
                    experiance and 2yrs of backend coding experiance.</p>
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
                                    <div className="dats">2016-2019</div>
                                    <div className="edu-desc"><strong>Jibwis</strong> I attended my high school in Jibwis Islamic Science Secondary School Gombe</div>
                                </div>
                                <div> 
                                        <div className="dats">2019-Now</div>
                                        <div className="edu-desc"> <strong>University of Maiduguri-</strong> I stated my high institution journey at University of Maiduguri where i am studying Electrical and electronics Engineering</div>
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
                            </ul>
                        </div>
                    </div>

                    <div className="work">
                            <div className="connector-circle"></div>
                            <div>
                                <h4>EXPERIANCE</h4>
                                <div className="edu">
                                    <div> 
                                        <div className="dats">2018-Now</div>
                                        <div className="edu-desc"> i work as a local freelance web developer</div>
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
