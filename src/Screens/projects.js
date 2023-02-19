import ConstructionIcon from "@mui/icons-material/Construction";
import HardwareIcon from "@mui/icons-material/Hardware";
import { Link } from "react-router-dom";
function Projects(){
    return(
        <div className="courses">
                {/* <div>
                    <img/>
                    <div>
                        <div className="project-title">
                        React Native Quiz App
                        </div>
                        <div className="describtions">
                        <div className="project_discribtion">
                            <h4>Describtion</h4>
                            <p>
                            Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Eligendi harum quis 
                    nulla deleniti consequuntur voluptas 
                    non illum sit! Dolore sint incidunt 
                    corporis dicta adipisci praesentium 
                    debitis sequi.
                            </p>
                        </div>
                        <h4>Features</h4>
                        <ul>
                            <li>login system</li>
                            <li>new user registration</li>
                            <li>the othe feature</li>
                            <li>men for the job</li>
                            <li>are you sure</li>
                        </ul>

                        <div>
                            <h4>User Xperience</h4>
                            <p>
                            nulla deleniti consequuntur voluptas 
                    non illum sit! Dolore sint incidunt 
                    corporis dicta adipisci praesentium 
                    debitis sequi
                            </p>
                        </div>

                        <div>
                            <h4>User Interface</h4>
                            <div>
                                
                            </div>
                        </div>
                        </div>    
                    </div> 
                    </div>
                */}
                    
                    <div className="hero">
            <img style={{objectFit:"cover"}} src={require('../Images/cons.jpg')}/>
            <div className='image-cover'></div>
            <div className="hero-texts">
            <div class="show-case-title">
                        <div class="show-case-circle"></div>
                        <h2>PAGE IS UNDER CONSTRUCTIONS</h2> <span style={{color:"green"}}><ConstructionIcon/></span>
                    </div>
                
                <p><span><HardwareIcon/></span>For now just take a quick tour throuth my projects in
                    <a style={{color:"green",marginLeft:6}} href="www.github.com/armanvirus">Github repo</a>
                    </p>

                    <Link to="/">Back to Home</Link>
                    
            </div>
            </div>    
                
        </div>
    )
}


export default Projects;