import logo from '../logo.svg';
function Product(){
    return(
        <div className='product'>
            <div>
                <img src={logo} alt='react'/>
            </div>
            <h2>React component</h2>
            <h3>price: 399 $</h3>
            <button>Add to cart</button>
        </div>
    )
}
export default Product;