import Product from "../components/Product";
import '../css/home.css';
function Home(){
    const content = [];
    for(let i=0;i<10;i++){
        content.push(<Product/>)
    }
    return(
        <div id="home">
            {content}
        </div>
    );
}
export default Home;