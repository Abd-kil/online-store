import '../css/productDetails.css';
import ProductSection from '../components/ProductsSection';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Rate from '../components/Rate';
import ProductAdvantage from '../components/ProductAdvantage';
import Truck from '../images/icon-delivery.png';
import Return from '../images/Icon-return.png';
function ProductDetails() {
    const { state: product } = useLocation();
    const [imageShown, setImageShown] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);
    const changeQuantity = val => {
        if (val > 100) setQuantity(100);
        else if (val < 1 && val !== '') setQuantity(1);
        else setQuantity(val)
    }
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const imagesRef = useRef(null);
    const detailsRef = useRef(null);
    const advantagesContainerRef = useRef(null);
    const [advantagesContainerHeight, setAdvantagesContainerHeight] = useState(0);
    const [imagesHeight, setImagesHeight] = useState(0);
    const [detailsHeight, setDetailsHeight] = useState(0);
    const [belowImages, setBelowImages] = useState(false);
    const [belowDetails, setBelowDetails] = useState(false);
    useEffect(() => {
        const updateDimensions = () => {
            if (imagesRef.current) {
                setImagesHeight(imagesRef.current.clientHeight);
            }
            if (detailsRef.current) {
                setDetailsHeight(detailsRef.current.clientHeight);
            }
        }

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }

    }, [belowDetails, belowImages])
    useEffect(() => {
        if (belowImages) {
            detailsHeight - (imagesHeight - 125) > 40 && window.innerWidth > 720
                ? setBelowImages(true)
                : setBelowImages(false);
            (imagesHeight - 125) - detailsHeight > 40 && window.innerWidth > 720
                ? setBelowDetails(true)
                : setBelowDetails(false);
        }
        else if (belowDetails) {
            (detailsHeight - 125) - imagesHeight > 40 && window.innerWidth > 720
                ? setBelowImages(true)
                : setBelowImages(false);
            imagesHeight - (detailsHeight - 125) > 40 && window.innerWidth > 720
                ? setBelowDetails(true)
                : setBelowDetails(false);
        }
        else {
            detailsHeight - imagesHeight > 80 && window.innerWidth > 720
                ? setBelowImages(true)
                : setBelowImages(false);
            imagesHeight - detailsHeight > 80 && window.innerWidth > 720
                ? setBelowDetails(true)
                : setBelowDetails(false);
        }
    }, [imagesHeight, detailsHeight]);
    useEffect(() => {
        if (advantagesContainerRef.current) {
            setAdvantagesContainerHeight(advantagesContainerRef.current.clientHeight);
        }
    }, [advantagesContainerHeight])
    return (
        <div className="product-details-page">
            <div className='product-details'>

                {/* images */}

                <div className='images' ref={imagesRef}>
                    <img src={imageShown} alt='' className='shown-image' />
                    <div className='other-images'>
                        {
                            product.images.map((image, index) => (
                                <img
                                    src={image} key={index}
                                    alt=''
                                    onClick={() => setImageShown(image)}
                                    className={image === imageShown ? 'selected-image' : ''}
                                />
                            ))
                        }
                    </div>
                    {
                        belowImages ? (
                            <div className='product-advantages-container'>
                                <ProductAdvantage
                                    icon={Truck}
                                    title='Free delivery'
                                    text='Enter your postal code for free delivery'
                                />
                                <ProductAdvantage
                                    icon={Return}
                                    title='Return delivery'
                                    text='Free 30 days delivery return'
                                />
                            </div>
                        ) : null
                    }
                </div>

                {/* descripsion */}

                <div id='details' ref={detailsRef}>
                    <h1>{product.name}</h1>
                    <Rate rate={product.rate} />
                    <h3>$ {product.price}</h3>
                    <p>{product.details}</p>
                    <hr />
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >

                        {/* colors */}

                        {
                            product.colors && (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline'
                                    }}
                                >
                                    <span style={{ marginRight: 20 }}>
                                        color:
                                    </span>
                                    {product.colors.map((color, index) => (
                                        <label
                                            key={index}
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <input
                                                type='radio'
                                                name='color'
                                                className='color-input'
                                                value={color.name}
                                                style={{
                                                    appearance: 'none',
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: '50%',
                                                    border: color.name === 'white' ? '1px solid #000' : '1px solid #fff',
                                                    background: color.value,
                                                    outline: selectedColor === color.name ? '3px solid #db4444' : 'none',
                                                    transform: selectedColor === color.name ? 'translateY(-2px)' : 'none',
                                                    cursor: 'pointer',
                                                    transition:' transform 0.1s'
                                                }}
                                                checked={selectedColor === color.name}
                                                onChange={() => setSelectedColor(color.name)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            )
                        }

                        {/* sizes */}

                        {
                            product.sizes && (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline'
                                    }}
                                >
                                    <span style={{ marginRight: 20 }}>
                                        size:
                                    </span>
                                    {product.sizes.map((size, index) => (
                                        <label
                                            key={index}
                                            className={selectedSize === size ? 'size-label selected-size' : 'size-label'}
                                        >

                                            {size}
                                            <input
                                                type='radio'
                                                name='size'
                                                value={size}
                                                style={{
                                                    appearance: 'none',
                                                }}
                                                checked={selectedSize === size}
                                                onChange={() => setSelectedSize(size)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            )
                        }

                        {/* line of input */}

                        <div className='line-of-input'>
                            <div>
                                <button
                                    onClick={() => changeQuantity(quantity - 1)}
                                    type='button'
                                    className='details-btn'
                                >-</button>
                                <input
                                    type='number'
                                    value={quantity}
                                    name='quantity'
                                    max={100}
                                    min={1}
                                    onChange={e => {
                                        changeQuantity(e.target.value)
                                    }}
                                    onBlur={e => {
                                        !e.target.value && setQuantity(1);
                                    }}
                                />
                                <button
                                    onClick={() => changeQuantity(Number(quantity) + 1)}
                                    type='button'
                                    className='details-btn'
                                >+</button>
                            </div>
                            <button type='submit' className='red-button'>
                                Add to cart <i className='bx bx-cart-alt' style={{
                                    fontSize: 'large',
                                    transform: 'translateY(2px)'
                                }}></i>
                            </button>
                            <button
                                style={{
                                    border: '1px #888 solid',
                                    borderRadius: '3px'
                                }}
                                className='details-btn'
                            >
                                <i
                                    className='bx bx-heart'
                                    style={{
                                        transform: 'translateY(2px)'
                                    }}
                                ></i>
                            </button>
                        </div>
                    </form>
                    {
                        belowDetails ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}
                                ref={advantagesContainerRef}
                                className={advantagesContainerHeight >= 80 ? 'product-advantages-container' : ''}
                            >
                                <ProductAdvantage
                                    icon={Truck}
                                    title='Free delivery'
                                    text='Enter your postal code for free delivery'
                                />
                                <ProductAdvantage
                                    icon={Return}
                                    title='Return delivery'
                                    text='Free 30 days delivery return'
                                />
                            </div>
                        ) : null
                    }
                </div>
            </div>
            {
                !belowDetails && !belowImages ? (
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '20px 0'
                        }}
                        ref={advantagesContainerRef}
                        className={advantagesContainerRef.current?.clientHeight >= 80 ? 'product-advantages-container' : ''}
                    >
                        <ProductAdvantage
                            icon={Truck}
                            title='Free delivery'
                            text='Enter your postal code for free delivery'
                        />
                        <ProductAdvantage
                            icon={Return}
                            title='Return delivery'
                            text='Free 30 days delivery return'
                        />
                    </div>
                ) : null
            }

            {/* related products section*/}

            {/* <ProductSection /> */}
        </div>
    );
}
export default ProductDetails;