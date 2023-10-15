import '../css/productsSection.css';
import { useEffect, useRef, useState } from 'react';
function ProductsSection(props){
    const todayProductsRef = useRef(null);
    const scrollTodayProducts = (scrollOfset)=>{
        if(todayProductsRef.current)
        todayProductsRef.current.scrollLeft += scrollOfset;
    }
    // Define the state for the time remaining.
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Calculate the time remaining and update the state.
    const calculateTimeRemaining = () => {
        let now = new Date();
        let expiration = null;
        if (props.time) expiration = new Date(props.time.year, props.time.month - 1, props.time.day);
        const timeDifference = expiration - now;
        if(timeDifference>0){
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const days = Math.floor((timeDifference / (1000 * 60 * 60 *24)));
            setTimeRemaining({days,hours,minutes,seconds});
        }
        else setTimeRemaining({days:0,hours:0,minutes:0,seconds:0})
    };

    // Use useEffect to update the time remaining every second.
    useEffect(() => {
        const timer = setInterval(() => {
        calculateTimeRemaining();
        }, 1000);

        // Clear the interval when the component unmounts.
        return () => {
        clearInterval(timer);
        };
    }, [props.time]); // Re-run the effect when the props.time changes.

    return(
        <section>
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
                    (<div className="time-left">
                        <div>
                            <h6>Days</h6>
                            <h2>{timeRemaining.days}</h2>
                        </div>
                        <h3>:</h3>
                        <div>
                            <h6>Hours</h6>
                            <h2>{timeRemaining.hours}</h2>
                        </div>
                        <h3>:</h3>
                        <div>
                            <h6>Minutes</h6>
                            <h2>{timeRemaining.minutes}</h2>
                        </div>
                        <h3>:</h3>
                        <div>
                            <h6>Seconds</h6>
                            <h2>{timeRemaining.seconds}</h2>
                        </div>
                    </div>):null
                }
            </div>
            
            <div>
                <button className="bx bx-left-arrow-alt" onClick={()=>scrollTodayProducts(-500)}></button>
                <button className="bx bx-right-arrow-alt" onClick={()=>scrollTodayProducts(500)}></button>
            </div>
        </div>
        <div className="flex-section" ref={todayProductsRef}>
            {props.content}
        </div>
        {props.buttonsBelow}
    </section>
    );
}
export default ProductsSection;