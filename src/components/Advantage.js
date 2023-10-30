import "../css/advantage.css";
function Advantage(props){
    return(
        <div className="advantage">
            <div className="icone-container">
                <h1 className={props.icone}></h1>
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default Advantage;