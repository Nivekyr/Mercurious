import "../Cards/CardFeed.css"; 

function Cardfeed(){
    return (
        <div className="cardfeed">
            <div className="imgfeed">

            </div>
            <div className="card_content">
                <div>
                    <h1 className="Monument_name">Nom monument</h1>
                    <h2 className="card_localisation">Ville, Pays</h2>
                </div>
                <div className="note_card_feed">
                    <h1>4.0</h1>
                    <img src={require("../../images/white_icons/star.png")} alt="" />
                </div>
            </div>
        </div>
    )
} 

export default Cardfeed;