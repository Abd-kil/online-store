import { useLocation } from 'react-router-dom';
import '../css/check-out.css';
import visa from '../images/visa.png';
import masterCard from '../images/master-card.png';
function CheckOut() {
    let { state } = useLocation();
    const sum = (array) => array.reduce((a, b) => a + b);
    return (
        <div className="check-out">
            <form className="check-out-form">
                <h1>Billing Details</h1>
                <label>First Name</label>
                <input type="text" name="first-name" className="input-field" required />
                <label>Last Name</label>
                <input type="text" name="last-name" className="input-field" />
                <label>Street Address</label>
                <input type="text" name="street-address" className="input-field" required />
                <label>Appartment, Floor, ect (optional)</label>
                <input type="text" name="appartment" className="input-field" />
                <label>City/Town</label>
                <input type="text" name="city" className="input-field" required />
                <label>Phone Number</label>
                <input type="number" name="phone" className="input-field" required />
                <label>Email Address</label>
                <input type="email" name="email" className="input-field" required />
                <label>
                    <input type="checkbox" name="save-checkout" />
                    Save this information for faster check-out next time
                </label>
            </form>
            <div className='cart-information'>
                <div className='cart-products'>
                    {state.cartProducts.map((product, index) => (
                        <div className='space-between' key={index}>
                            <span>
                                <div className='cart-product-title'>
                                    <img src={product.image} alt={product.name} width='35px' />
                                    {product.name}
                                </div>
                            </span>
                            <span>${product.price * state.quantities[index]}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='space-between'>
                        <span>Subtotal</span>
                        <span>${sum(state.cartProducts.map((p, index) => p.price * state.quantities[index]))}</span>
                    </div>
                    <hr />
                    <div className='space-between'>
                        <span>Shipping</span>
                        <span>free</span>
                    </div>
                    <hr />
                    <div className='space-between'>
                        <span>Total</span>
                        <span>${sum(state.cartProducts.map((p, index) => p.price * state.quantities[index]))}</span>
                    </div>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className='space-between'>
                            <label>
                                <input type='radio' name='pay-method' value='bank' required />
                                Bank
                            </label>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <img src={visa} alt='' height={8} />
                                <img src={masterCard} alt='' height={15} />
                            </span>
                        </div>
                        <label>
                            <input type='radio' name='pay-method' value='cash' required />
                            Cash on delivery
                        </label>
                        <div className='space-between'>
                            <input type='text' name='coupon' placeholder='Coupon Code' style={{ minWidth: 100 }} />
                            <button
                                className='red-button'
                                onClick={e => {
                                    e.preventDefault();
                                }}
                            >Apply Coupon</button>
                        </div>
                        <button className='red-button' type='submit'>Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CheckOut;