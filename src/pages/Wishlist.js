import Product from "../components/Product";
import ProductsSection from "../components/ProductsSection";
import '../css/wishList.css';
function WishList(){
    const wishList = [];
    for(let i=0;i<6;i++){
        wishList.push(<Product wishlist/>)
    }
    const relative = [];
    for(let i=0;i<6;i++){
        relative.push(<Product/>)
    }
    
    return(
        <>
        
        <div className="wish-list">
            <h3>Wishlist ({wishList.length})</h3>
            <div className="content">
            {wishList}
            </div>
        </div>
        <ProductsSection
            redTitle="relative"
            title="just for you"
            scrollable
            content={relative}
        />
        </>
    );
}
export default WishList;