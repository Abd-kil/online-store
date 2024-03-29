import SideBar from "../components/SideBar";
import Product from "../components/Product";
import '../css/home.css';
import ProductsSection from "../components/ProductsSection";
import { useRef } from "react";
import Offer from "../components/Offer";
import Camera from "../images/Category-Camera.png";
import CellPhone from "../images/Category-CellPhone.png";
import Computer from "../images/Category-Computer.png";
import Gamepad from "../images/Category-Gamepad.png";
import Headphone from "../images/Category-Headphone.png";
import SmartWatch from "../images/Category-SmartWatch.png";
import PS5 from "../images/ps5.png";
import speacker from "../images/Frame 694.png";
import clipart from "../images/clipart-speacker.png";
import gucci from "../images/gucci.png";
import Advert from "../components/Advert";
import Advantage from "../components/Advantage";
function Home() {
    var content = [];
    for (let i = 0; i < 20; i++) {
        content.push({
            'name': 'Sony Playstation 5',
            'images': [
                PS5,
                PS5,
                PS5,
                PS5,
            ],
            'price': '939',
            'rate': 4,
            'details': `Model Number CFI-2000
            Includes DualSense Wireless Controller, 1TB SSD, 2 Horizontal Stand Feet, HDMI Cable, AC power cord, USB cable, printed materials, ASTRO’s PLAYROOM (Pre-installed game)
            Vertical Stand sold seperately`,
            'colors': [
                {
                    'name': 'black',
                    'value': '#000'
                },
                {
                    'name': 'white',
                    'value': '#fff'
                }],
            'sizes': ['xs', 's', 'm', 'l', 'xl']
        })
    }
    const categories = [
        {
            name: "phones",
            icone: "bx bx-mobile-alt",
            image: CellPhone
        },
        {
            name: "computers",
            icone: "bx bx-desktop",
            image: Computer
        },
        {
            name: "smartWatch",
            icone: "bx bxs-watch-alt",
            image: SmartWatch
        },
        {
            name: "camera",
            icone: "bx bx-camera",
            image: Camera
        },
        {
            name: "headPhones",
            icone: "bx bx-headphone",
            image: Headphone
        },
        {
            name: "gaming",
            icone: "bx bx-joystick-alt",
            image: Gamepad
        },

    ]
    const category = useRef(null);
    return (
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
                    day: 18,
                    month: 2,
                    year: 2024
                }}
                content={
                    content.map((p, index) => (
                        <Product
                            key={index}
                            product={p}
                            whislist
                            hideCartButton
                        />
                    ))
                }
                buttonsBelow={
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <button className="red-button">View All</button>
                    </div>
                }
                scrollable
            />
            <hr />
            <ProductsSection
                redTitle="Categories"
                title="Brows By Category"
                scrollable
                content={
                    categories.map((c) => (
                        <div key={c.name} className="category" ref={category}>
                            {/* <i className={c.icone} style={{fontSize:'500%'}}/> */}
                            <img src={c.image} alt={c.name} />
                            <h4 style={{ marginTop: "15px", fontWeight: "normal" }}>
                                {c.name}
                            </h4>
                        </div>
                    ))
                }
            />
            <hr />
            <Offer
                time={{
                    day: 20,
                    month: 2,
                    year: 2024
                }}
                img={speacker}
            />
            <ProductsSection
                redTitle="Our Products"
                title="Explore Our Products"
                scrollable
                content={
                    content.map((p, index) => (
                        <Product
                            key={index}
                            product={p}
                            hideCartButton
                        />
                    ))
                }
                towRows
            />
            <hr />
            <ProductsSection
                redTitle="featured"
                title="New Arrived"
                content={
                    <div className="adverts-section">
                        <Advert
                            title="playstation 5"
                            details="Black and White version of the PS5 coming out on sale"
                            image={PS5}
                            size="vertical"
                        />
                        <div className="adverts-group">
                            <Advert
                                title="Altra speacker"
                                details="enhance your music experience"
                                image={speacker}
                                size="horizontal"
                            />
                            <div className="flex-section">
                                <Advert
                                    title="speackers"
                                    details="amazon wirless speackers"
                                    image={clipart}
                                    size="small"
                                />
                                <Advert
                                    title="perfume"
                                    details="GUCCI INTENSE OUD EDP"
                                    image={gucci}
                                    size="small"
                                />
                            </div>
                        </div>
                    </div>
                }
            />
            <div className="advantages">
                <Advantage
                    icone="bx bxs-truck"
                    title="free and fast delivery"
                    text="Free delivery for all orders over 140$"
                />
                <Advantage
                    icone="bx bx-headphone"
                    title="24/7 customer service"
                    text="Friendly 24/7 customer support"
                />
                <Advantage
                    icone="bx bx-check-shield"
                    title="money back guarantee"
                    text="We retun money within 30 days"
                />
            </div>
        </div>
    );
}
export default Home;