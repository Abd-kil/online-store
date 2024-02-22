function Rate(props) {
    return (
        <div className="rate-box">
            <i className='bx bxs-star' style={props.rate >= 1 ? { color: 'orange' } : { color: '#ccc' }}></i>
            <i className='bx bxs-star' style={props.rate >= 2 ? { color: 'orange' } : { color: '#ccc' }}></i>
            <i className='bx bxs-star' style={props.rate >= 3 ? { color: 'orange' } : { color: '#ccc' }}></i>
            <i className='bx bxs-star' style={props.rate >= 4 ? { color: 'orange' } : { color: '#ccc' }}></i>
            <i className='bx bxs-star' style={props.rate >= 5 ? { color: 'orange' } : { color: '#ccc' }}></i>
        </div>
    );
}
export default Rate;