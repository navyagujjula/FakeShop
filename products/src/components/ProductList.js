import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./redux/ProductComponent";
import { productList } from './redux/ProductStore/productActions'

const ProductList = () => {
    let dispatch = useDispatch();
    const products = useSelector((state) => state.productsList.products)


    const fetchProductList = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })
        dispatch(productList(response.data))
    }
    useEffect(() => {
        fetchProductList();
    }, []);
    


return (
   <div className="ui grid container">
       <ProductComponent />
   </div>

);
}
export default ProductList;