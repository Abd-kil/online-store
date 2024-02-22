function ProductAdvantage(props){
    return(
        <div
            style={{
                display:'flex',
                alignItems:'center',
            }}
            className="product-advantage"
        >
            <img 
                src={props.icon} 
                alt=""
                width={40}
                height={40}
            />
            <div>
                <h4
                    style={{
                        margin:5
                    }}
                >{props.title}</h4>
                <p
                    style={{
                        margin:5
                    }}
                >{props.text}</p>
            </div>
        </div>
    )
}
export default ProductAdvantage;