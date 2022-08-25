import "../Navtop/navtop.css"
import { Link } from "react-router-dom";

function Navtop(){
    return(
        <div className="Navtop">
            <div className="searchBar">
                <img class="navtopSearch" src={require("../../images/gray_icons/search_gray.png")}></img>
                <input type="text" className="inputSearchBar" placeholder="Search a place"/>
            </div>
            <div className="navtop-right">
                <img class="navtopNotification" src={require("../../images/gray_icons/notification.png")}></img>
                <Link to="/profile"><img class="navtopProfile" src={require("../../images/profilePicture.jpg")}></img></Link>
            </div>
        </div>
    )
}

export default Navtop;