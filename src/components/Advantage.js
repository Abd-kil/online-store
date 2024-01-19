import "../css/advantage.css";
function Advantage(props){
    return(
        <div className="advantage">
            <div className="icone-container">
                <h1 className={props.icone}></h1>
            </div>
            <div>
                <h4 style={props.titleFontSize?{fontSize:props.titleFontSize}:null}>{props.title}</h4>
                <p style={props.textFontSize?{fontSize:props.textFontSize}:null}>{props.text}</p>
            </div>
        </div>
    );
}
export default Advantage;