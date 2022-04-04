
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactPageIcon from "@mui/icons-material/ContactPage"
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

 function Nav(){
    return(
        <div className="navbar">
            {/* <div className="HomeRightLeft"> */}
            <div className="HomeIcon">
                <HomeIcon/>
            </div>
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
        // </div>
    )
}

export default Nav;