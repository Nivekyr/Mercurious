import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";
import "../styles/aroundme.css"

function Aroundme(){
    return (
        <div className="aroundpage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <h1>Around me</h1>
            </div>
        </div>
    )
}
export default Aroundme; 