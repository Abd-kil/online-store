import "../css/advert.css"
function Advert(props){
    return(
        <div className={`advert ${props.size}`}>
            <img src={props.image}/>
            <div className="text-container">
                <h3>{props.title}</h3>
                <p>{props.details}</p>
                <a href={props.link}>Shop Now</a>
            </div>
        </div>
    );
}
export default Advert;