import * as t from './actionTypes';
import axios from 'axios';


const API_URL = 'http://59bfe1e6a101d20011afd595.mockapi.io/products';

export const remove = id => ({
    type: t.REMOVE,
    id
});

export function setQuantity(id, quantity) {
    return (dispatch) => {

        dispatch({
            type: t.SET_QUANTITY,
            id,
            quantity
        });

        axios.put(API_URL + '/' +id, { selectedQuantity: quantity })
            .then(response => {
                console.log(response.status);
            });

    };
}

export function productsFetchSuccess(items) {
    return {
        type: t.PRODUCTS_FETCH_SUCCESS,
        items
    }
}

export function fetchProducts() {
    return (dispatch) => {

        axios.get(API_URL)
            .then(response => {
                dispatch(productsFetchSuccess(response.data));

                return response;
            })
            .catch(error => console.log(error));
    }
}