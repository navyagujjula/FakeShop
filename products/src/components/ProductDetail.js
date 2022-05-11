import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct,removeSelectedProduct } from './redux/ProductStore/productActions'


const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product)


    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log(err);
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "")
            fetchProductDetails();
            return ()=>{
                dispatch(removeSelectedProduct());  
            };
    }, [productId])



    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (<div>...Loading</div>) :(
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src = {product.image} alt={product.title}/>
                            </div>
                            <div className="column rp">
                                <h1>{product.tilte}</h1>
                                <h2>
                                    <a className="ui teal tag label">${product.price}</a>
                                    <h3 className="ui brown black header">{product.category}</h3>
                                    <p>{product.description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ProductDetail;