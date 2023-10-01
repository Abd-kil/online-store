import logo from '../logo.svg';
function Product(){
    return(
        <div className='product'>
            <div style={{background:'#eee'}}>
                <img src={logo} alt='react'/>
            </div>
            <h4>React component</h4>
            <h5>$ 399</h5>
            <div className="rate-box">
            <i className='bx bxs-star' style={{color:'orange'}}></i>
            <i className='bx bxs-star' style={{color:'orange'}}></i>
            <i className='bx bxs-star' style={{color:'orange'}}></i>
            <i className='bx bxs-star' style={{color:'orange'}}></i>
            <i className='bx bxs-star' style={{color:'#ccc'}}></i>
        </div>
        </div>
    )
}
export default Product;