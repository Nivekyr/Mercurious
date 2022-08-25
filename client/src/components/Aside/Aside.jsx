import "../Aside/aside.css"; 
import { Link } from "react-router-dom";

function Aside () {
    return(
        <div className="aside">
            <div className="logoaside">
                <img class="logo_mercurious" src={require("../../images/logo_mercurious.png")} alt="Mercurius Logo"></img>
                <p>Mercurious</p>
            </div>
            <div className="aside_buttons">
                <p className="menu_aside">Menu</p>
                <div><Link to="/"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/house-3.png")} alt="home icon"></img> Home</button></Link></div>
                <div><Link to="/explore"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/search_gray.png")} alt="search icon"></img> Explore</button></Link></div>
                <div><Link to="/mymap"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/worldwide-2.png")} alt="worldwide icon"></img> My map</button></Link></div>
                <div><Link to="/liked"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/love_gray.png")} alt="heart icon"></img> Liked places</button></Link></div>
                <div><Link to="/profile"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/user-2.png")} alt="profile icon"></img> Profile</button></Link></div>
                <hr class="solid"></hr>
                <p className="menu_aside">Account</p>
                <div><Link to="/settings"><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/house-3.png")} alt="home icon"></img> Settings</button></Link></div>
            </div>
        </div>
    ) 
}

export default Aside; 