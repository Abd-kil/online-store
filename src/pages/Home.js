import SideBar from "../components/SideBar";
import Product from "../components/Product";
import '../css/home.css';
import ProductsSection from "../components/ProductsSection";
function Home(){
    const content = [];
    for(let i=0;i<10;i++){
        content.push(<Product/>)
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
            <hr style={{width:"80%"}}/>
            <ProductsSection
            redTitle="Categories"
            title="Brows By Category"
            />
        </div>
    );
}
export default Home;