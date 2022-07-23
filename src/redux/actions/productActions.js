import { ActionType } from '../constants/action-types';


export const setProducts = (products) => {
    return {
        type : ActionType.SET_PRODUCTS,
        payload : products,
    };
};     

export const selectedproduct = (product) => {
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload : product,
    };
};

