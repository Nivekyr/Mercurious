import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";
import "../styles/mymap.css"
function Mymap(){
    return (
        <div className="Mymappage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <h1>My Map</h1>
            </div>
        </div>
    )
}
export default Mymap; 