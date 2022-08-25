import "../styles/plan.css"
import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";

function Plan(){
    return (
        <div className="Planpage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <h1>Plan your trip</h1>
            </div>
        </div>
    )
}
export default Plan; 