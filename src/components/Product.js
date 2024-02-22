import { Link } from 'react-router-dom';
import '../css/product.css';
import Rate from './Rate';
function Product(props) {
    return (
        <div className='product'>
            <Link to='/product-details' state={props.product}>
                <div className='product-div'>
                    <div className='wishlist-button-container'>
                        <button className={'wishlist-button bx ' + (props.wishlist ? 'bx-trash' : 'bx-heart')}
                            onClick={(e) => e.preventDefault()}
                        ></button>
                    </div>
                    <img src={props.product.images[0]} alt={props.product.name} />
                    {props.hideCartButton ?
                        null :
                        <button className='cart-button'>
                            <i className='bx bx-cart-alt' /> Add to cart
                        </button>
                    }
                </div>
                <h4>{props.product.name}</h4>
                <h5 style={{ fontWeight: 'normal' }}>$ {props.product.price}</h5>
                <Rate rate={props.product.rate}/>
            </Link>
        </div>
    )
}
export default Product;