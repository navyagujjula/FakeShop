import { ActionTypes } from "./productActionTypes"

let productList = (products)=>{
    return{
    type:ActionTypes.PRODUCTS_LIST,
    payload:products
    }
}

let selectedProduct = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
let removeSelectedProduct = ()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
export {productList,selectedProduct,removeSelectedProduct};