import PS5 from '../images/ps5.png';
import gucci from '../images/gucci.png';
import '../css/cart.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Cart(){
    const cartProducts = [
        {
            name:'Playstation 5',
            image:PS5,
            price:650,
        },
        {
            name:'Gucci Perfume',
            image:gucci,
            price:95,
        }
    ]
    const [quantities,setQuanitities] = useState(cartProducts.map(()=>1));
    const updateQuantities = (index,value)=>{
        const newQuanitities = [...quantities];
        newQuanitities[index] = value;
        setQuanitities(newQuanitities);
    }
    const sum = (array)=>array.reduce((a,e)=>a+e);
    return(
        <div className="cart">
            <table>
                <thead>
                <tr>
                    <td>product</td>
                    <td>price</td>
                    <td>quantity</td>
                    <td>subtotal</td>
                </tr>
                </thead>
                <tbody>
                {cartProducts.map((product,index)=>(
                    <tr key={index}>
                        <td>
                            <div className='cart-product-title'>
                            <img src={product.image} alt={product.name} width='50px' />
                            {product.name}
                            </div>
                        </td>
                        <td>${product.price}</td>
                        <td>
                            <input className='quantity'
                            type='number' 
                            min={1} 
                            max={99} 
                            width='10px'
                            value={quantities[index]} 
                            onChange={(e)=>updateQuantities(index,e.target.value)}
                            />
                        </td>
                        <td>${product.price * quantities[index]}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className='space-between buttons-container'>
                <button>return to shope</button>
                <button>update cart</button>
            </div>
            <div style={{height:'30px'}}></div>
            <div className='last-cart-layout'>
                <form className='space-between'>
                    <input placeholder='Coupon Code'/>
                    <button className='red-button'>Apply Coupon</button>
                </form>
                <div className='cart-total'>
                    <h3>Cart Total</h3>
                    <div>
                        <div className='space-between'>
                            <span>Subtotal</span>
                            <span>${sum(cartProducts.map((p,index)=>p.price*quantities[index]))}</span>
                        </div>
                        <hr/>
                        <div className='space-between'>
                            <span>Shipping</span>
                            <span>free</span>
                        </div>
                        <hr/>
                        <div className='space-between'>
                            <span>Total</span>
                            <span>${sum(cartProducts.map((p,index)=>p.price*quantities[index]))}</span>
                        </div>
                        
                    </div>
                    <div className='center'>
                        <Link to='../check-out' state={{cartProducts:cartProducts,quantities:quantities}}>
                            <button className='red-button'>Process To Checkout</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Cart;