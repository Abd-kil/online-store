import '../css/product.css';
function Product(props){
    let rate = props.rate;
    
    return(
        <div className='product'>
            <div className='product-div'>
                <div className='wishlist-button-container'>
                    <button className={'wishlist-button bx ' + (props.wishlist?'bx-trash':'bx-heart')}></button>
                </div>
                <img src={props.image} alt={props.name}/>
                {props.hideCartButton?
                null:
                <button className='cart-button'>
                    <i className='bx bx-cart-alt'/> Add to cart
                </button>
                }
            </div>
            <h4>{props.name}</h4>
            <h5 style={{fontWeight:'normal'}}>$ {props.price}</h5>
            <div className="rate-box">
                <i className='bx bxs-star' style={rate >= 1?{color:'orange'}:{color:'#ccc'}}></i>
                <i className='bx bxs-star' style={rate >= 2?{color:'orange'}:{color:'#ccc'}}></i>
                <i className='bx bxs-star' style={rate >= 3?{color:'orange'}:{color:'#ccc'}}></i>
                <i className='bx bxs-star' style={rate >= 4?{color:'orange'}:{color:'#ccc'}}></i>
                <i className='bx bxs-star' style={rate >= 5?{color:'orange'}:{color:'#ccc'}}></i>
            </div>
        </div>
    )
}
export default Product;