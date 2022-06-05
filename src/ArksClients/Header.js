import react from "react";
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
function Header(){
    return(
        <header>
            <div className="header">
            <div>
            <img src="" alt="logo"/>
            <h3>Arks</h3>
            <div className="search">
                    <input type="text" Placeholder="Search here..."/>
                </div>
            </div>

                <nav>
                    <ul>
                        <li><a>Tech</a></li>
                        <li><a>Science</a></li>
                        <li><a>Entertaiments</a></li>
                        <li><a>Lifestyles</a></li>
                        <li><a>Sport</a></li>
                    </ul>
                </nav>
                    
            </div>
        </header>
    )
}
export default Header;