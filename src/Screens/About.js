
import Nav from "./Nav";
import Ratings from "./Ratings"



function About(){
    return(
        <div className="About">
            <div className="navigations">
            <Nav/>
            </div>

            <div className="aboutContent">
            <h3>Want to Know About Me?</h3>
             <p>Im Arman Grema, 22yrs old from Nigeria, Gombe 
                 this.state. Im a self taught Fullstack web developer 
                 with 4yrs+ of frontend development 
                 experiance and 2yrs of backend coding experiance.</p>

            <Ratings/>
            </div>
        </div>
    )
}

export default About;