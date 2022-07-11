import "../Aside/aside.css"; 

function Aside () {
    return(
        <div className="aside">
            <div className="logoaside">
                <img class="logo_mercurious" src={require("../../images/logo_mercurious.png")} alt="Mercurius Logo"></img>
                <p>Mercurious</p>
            </div>
            <div className="aside_buttons">
                <p className="menu_aside">Menu</p>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/house-3.png")} alt="home icon"></img> Home</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/search_gray.png")} alt="search icon"></img> Explore</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/map.png")} alt="map icon"></img> Around me</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/clipboard-3.png")} alt="prepare icon"></img> Prepare your trip</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/worldwide-2.png")} alt="worldwide icon"></img> My map</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/love_gray.png")} alt="heart icon"></img> Liked places</button></div>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/user-2.png")} alt="profile icon"></img> Profile</button></div>
                <hr class="solid"></hr>
                <p className="menu_aside">Account</p>
                <div><button className="aside_button"><img class="icon_aside" src={require("../../images/gray_icons/house-3.png")} alt="home icon"></img> Settings</button></div>
            </div>
        </div>
    ) 
}

export default Aside; 