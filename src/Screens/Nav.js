
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactPageIcon from "@mui/icons-material/ContactPage"
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {Link} from "react-router-dom";

 function Nav(){
    return(
        <div className="navbar">
            {/* <div className="HomeRightLeft"> */}
            <div className="HomeIcon">
                <Link to="/"><HomeIcon/></Link>
            </div>
    {/* <Mui/> */}
            <div className="NavIcons">
                 <Link to="/about"> <AccountBoxIcon/></Link>
                 <Link to="/#"> <WorkIcon/> </Link>
                 <Link to="/"> <CollectionsBookmarkIcon/> </Link>             
                 <Link to="/resume"> <DescriptionIcon/></Link>
                 {/* <a href="/"></a> */}
                 <Link to="/contact"> <ContactPageIcon/></Link>
            </div>

            <div className="downloadIcon">
               <a> <CloudDownloadIcon/> </a>
            </div>
         </div>
        // </div>
    )
}

export default Nav;