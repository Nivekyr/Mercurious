import "../styles/feed.css"
import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";
import Cardfeed from "../Cards/CardFeed";

function Feedpage(){
    return (
        <div className="Feedpage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <div className="feed">
                    <h1>Feed</h1>
                    <Cardfeed></Cardfeed>
                </div>
            </div>
        </div>
    )
}
export default Feedpage; 