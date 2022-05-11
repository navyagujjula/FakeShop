import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./ProductStore/productReducer";
let rootReducer = combineReducers({
    productsList : productReducer,
    product: selectedProductReducer,
})
export {rootReducer};