import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";
import "../styles/explore.css"

function Explore(){
    return (
        <div className="Explorepage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <h1>Explore</h1>
            </div>
        </div>
    )
}
export default Explore; 