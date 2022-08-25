import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";
import "../styles/profile.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import rome from "../../images/images_destinations/rome.jpeg"
function Profile(){
    return (
        <div className="profilepage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <div className="profile_stats">
                    <div className="profile">
                        <div className="profile_picture">
                        </div>
                        <h1>Prénom Nom</h1>
                    </div>
                    <div className="vertical_divider">
                    </div>
                    <div class="stat_percentage" style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={10} text={"10%"}/>
                    <h2>World visited</h2>
                    </div>
                    <div className="stat_visited">
                        <h1>6206 Monuments</h1>
                        <div className="horizontal_divider"></div>
                        <h1>34 Pays</h1>
                    </div>
                </div>
                <div className="visited_countries">
                    <div className="visited_country"></div>
                    <div className="visited_country"></div>
                    <div className="visited_country"></div>
                    <div className="visited_country"></div>
                    <div className="visited_country"></div>
                    <div className="visited_country">
                        <h3>+2</h3>
                    </div>
                </div>
                <div className="visited_cities">
                    <div className="visited_city">
                        <div className="bottom_city">
                        </div>
                    </div>
                    <div className="visited_city"></div>
                </div>
            </div>
        </div>
    )
}
export default Profile; 