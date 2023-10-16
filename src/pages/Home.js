import SideBar from "../components/SideBar";
import Product from "../components/Product";
import '../css/home.css';
import ProductsSection from "../components/ProductsSection";
import { useRef } from "react";
import Timer from "../components/Timer";
import Offer from "../components/Offer";
function Home(){
    const content = [];
    for(let i=0;i<20;i++){
        content.push(<Product/>)
    }
    const categories = [
        {
            name:"phones",
            icone:"bx bx-mobile-alt",
            image:"./images/Category-CellPhone.png"
        },
        {
            name:"computers",
            icone:"bx bx-desktop",
            image:"./images/Category-Computer.png"
        },
        {
            name:"smartWatch",
            icone:"bx bxs-watch-alt",
            image:"./images/Category-SmartWatch.png"
        },
        {
            name:"camera",
            icone:"bx bx-camera",
            image:"./images/Category-Camera.png"
        },
        {
            name:"headPhones",
            icone:"bx bx-headphone",
            image:"./images/Category-Headphone.png"
        },
        {
            name:"gaming",
            icone:"bx bx-joystick-alt",
            image:"./images/Category-Gamepad.png"
        },
        
    ]
    const category = useRef(null);
    return(
        <div id="home">
            {/* <section className="flex-section">
                <SideBar/>
                <div style={{padding:'30px 0'}}>
                    <Offer/>
                </div>
            </section> */}
            <ProductsSection
                redTitle="Today's"
                title="Flash sales"
                time={{
                    day:18,
                    month:10,
                    year:2023
                }}
                content={content}
                buttonsBelow = {
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>  
                        <button className="red-button">View All</button>
                    </div>
                }
                scrollable
            />
            <hr/>
            <ProductsSection
                redTitle="Categories"
                title="Brows By Category"
                scrollable
                content={
                    categories.map((c)=>(
                        <div key={c.name} className="category" ref={category}>
                            {/* <i className={c.icone} style={{fontSize:'500%'}}/> */}
                            <img src={c.image} alt={c.name}/>
                            <h4 style={{marginTop:"15px",fontWeight:"normal"}}>
                                {c.name}
                            </h4>
                        </div>
                    ))
                }
            />
            <hr/>
            <Offer
                time={{
                    day:20,
                    month:10,
                    year:2023
                }}
            />
            <ProductsSection
                redTitle="Our Products"
                title="Explore Our Products"
                scrollable
                content={content}
                towRows
            />
        </div>
    );
}
export default Home;