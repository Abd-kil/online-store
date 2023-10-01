import { useRef } from "react";
import Product from "../components/Product";
import SideBar from "../components/SideBar";
import '../css/home.css';
function Home(){
    const content = [];
    for(let i=0;i<10;i++){
        content.push(<Product/>)
    }

    const todayProductsRef = useRef(null);
    const scrollTodayProducts = (scrollOfset)=>{
        if(todayProductsRef.current)
        todayProductsRef.current.scrollLeft += scrollOfset;
    }
    return(
        <div id="home">
            {/* <section className="flex-section">
                <SideBar/>
                <div className='images-container'>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </section> */}
            <section>
                <div className="section-title">
                    <div className="title-half">
                        <div>
                            <div className="red-title">
                                <div></div>
                                <h5>Today's</h5>
                            </div>
                            <h1>Flash sales</h1>
                        </div>
                        <div className="time-left">
                            <div>
                                <h6>Days</h6>
                                <h1>03</h1>
                            </div>
                            <h2>:</h2>
                            <div>
                                <h6>Hours</h6>
                                <h1>03</h1>
                            </div>
                            <h2>:</h2>
                            <div>
                                <h6>Minutes</h6>
                                <h1>03</h1>
                            </div>
                            <h2>:</h2>
                            <div>
                                <h6>Seconds</h6>
                                <h1>03</h1>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div>
                        <button className="bx bx-left-arrow-alt" onClick={()=>scrollTodayProducts(-500)}></button>
                        <button className="bx bx-right-arrow-alt" onClick={()=>scrollTodayProducts(500)}></button>
                    </div>
                </div>
                <div className="flex-section" ref={todayProductsRef}>
                    {content}
                </div>
                <button>View All</button>
            </section>
            
        </div>
    );
}
export default Home;