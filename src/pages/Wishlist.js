import Product from "../components/Product";
import ProductsSection from "../components/ProductsSection";
import PS5 from '../images/ps5.png'
import '../css/wishList.css';
function WishList(){
    const wishList = [];
    for(let i=0;i<6;i++){
        wishList.push({
            'name':'Sony Playstation 5',
            'images':[PS5],
            'price':'939',
            'rate':4
        })
    }
    const relative = [];
    for(let i=0;i<6;i++){
        relative.push({
            'name':'Sony Playstation 5',
            'images':[PS5],
            'price':'939',
            'rate':4
        })
    }
    
    return(
        <>
        
        <div className="wish-list">
            <h3>Wishlist ({wishList.length})</h3>
            <div className="content">
            {
                wishList.map((p,index)=>(
                    <Product
                        key={index}
                        product={p}
                        wishlist
                    />
                ))
            }
            </div>
        </div>
        <ProductsSection
            redTitle="relative"
            title="just for you"
            scrollable
            content={relative.map((p,index)=>(
                <Product
                    key={index}
                    product={p}
                    wishList
                />
            ))}
        />
        </>
    );
}
export default WishList;