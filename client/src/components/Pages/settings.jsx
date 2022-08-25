import "../styles/settings.css"
import Navtop from "../Navtop/Navtop";
import Aside from "../Aside/Aside";

function Settings(){
    return (
        <div className="Settingspage">
            <div className="Aside">
                <Aside></Aside>
            </div>
            <div className="Right">
                <Navtop></Navtop>
                <h1>Settings</h1>
            </div>
        </div>
    )
}
export default Settings; 