import { ActionTypes } from "./productActionTypes";

let intialState = {
    products: []
}
let productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.PRODUCTS_LIST:
            return { ...state, products: payload };
        default:
            return state;
    }
}
let selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}


export { productReducer, selectedProductReducer };