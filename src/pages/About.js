import sideImage from '../images/Side Image.png';
import Advantage from '../components/Advantage';
import '../css/about.css';
function About(){
    return(
        <div className="about">
            <div className="flex-section">
                <div className="about-text">
                    <h1>Our Story</h1>
                    <p>
                        Launced in 2015, Exclusive is Middle East's premier online shopping 
                        makterplace with an active presense in Syria. 
                        Supported by wide range of tailored marketing, data and service solutions, 
                        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. 
                        Exclusive offers a diverse assotment in categories ranging from consumer.
                    </p>
                </div>
                <img src={sideImage} alt='' className='side-image'/>
            </div>
            <div className='advantages'>
                <Advantage
                    icone="bx bx-store"
                    title="10.4K"
                    text="sallers active in our site"
                    titleFontSize={22}
                />
                <Advantage
                    icone="bx bx-briefcase"
                    title="45.5K"
                    text="customers active in our site"
                    titleFontSize={22}
                />
                <Advantage
                    icone="bx bx-dollar"
                    title="25K"
                    text="anual gross sale in our site"
                    titleFontSize={22}
                />
            </div>
            <div className='advantages'>
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
    )
}
export default About;