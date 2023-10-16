import "../css/offer.css";
import Timer from "./Timer";
function Offer(props){
    return(
        <section style={{display:'flex',justifyContent:"center"}}>
        <div className="offer">
            <div className="offer-left">
                <p>categories</p>
                <h3>enhance your music experience</h3>
                {
                    props.time?(<Timer 
                        time={props.time}
                    />):null
                }
                <button>Buy Now</button>
            </div>
            <div className="offer-right">
                <img src="images/Frame 694.png"/>
            </div>
        </div>
        </section>
    );
}
export default Offer;