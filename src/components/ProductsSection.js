import '../css/productsSection.css';
import { useRef } from 'react';
import Timer from './Timer';
function ProductsSection(props){
    const todayProductsRef = useRef(null);
    const scrollTodayProducts = (dir)=>{
        const offset = window.innerWidth / 1.5;
        if(todayProductsRef.current)
        todayProductsRef.current.scrollLeft += (dir=="right" ? offset : -offset);
    }
    
    return(
        <section className='productsSection'>
        <div className="section-title">
            <div className="title-half">
                <div>
                    <div className="red-title">
                        <div></div>
                        <h5>{props.redTitle}</h5>
                    </div>
                    <h2>{props.title}</h2>
                </div>
                {
                props.time?
                    (<Timer time={props.time} colon/>):null
                }
            </div>
            {
            props.scrollable ?
            (<div className="arrows-box">
                <button className="bx bx-left-arrow-alt" onClick={()=>scrollTodayProducts("left")}></button>
                <button className="bx bx-right-arrow-alt" onClick={()=>scrollTodayProducts("right")}></button>
            </div>) : null
            }
        </div>
        <div className={`flex-section ${(props.towRows && window.innerWidth >= 720) ?"multirows-section":""}`} ref={todayProductsRef}>
            {props.content}
        </div>
        {props.buttonsBelow}
    </section>
    );
}
export default ProductsSection;