import logo from '../logo.svg';
function Product(){
    let rate = 4;
    return(
        <div className='product'>
            <div style={{background:'#eee'}}>
                <img src={logo} alt='react'/>
            </div>
            <h4>React component</h4>
            <h5>$ 399</h5>
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