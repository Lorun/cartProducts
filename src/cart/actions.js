import * as t from './actionTypes';
import axios from 'axios';


const API_URL = 'http://59bfe1e6a101d20011afd595.mockapi.io/products';


export function setQuantity(id, quantity) {
    return (dispatch) => {

        dispatch({
            type: t.SET_QUANTITY,
            id,
            quantity
        });

        axios
            .put(API_URL + '/' +id, { selectedQuantity: quantity })
            .then(response => {
                console.log(response.status);
            })
            .catch(error => console.log(error));

    };
}

export function productsFetchSuccess(items) {
    return {
        type: t.PRODUCTS_FETCH_SUCCESS,
        items
    }
}

export function toggleFetching() {
    return {
        type: t.TOGGLE_FATCHING
    }
}

export function onSelectSku(event, id) {
    return (dispatch) => {
        const currentSku = event.target.value;
        if (!currentSku) return false;

        dispatch({
            type: t.SELECT_SKU,
            id,
            currentSku
        });

        axios
            .put(API_URL + '/' +id, { currentSku })
            .then(response => {
                console.log(response.status);
            })
            .catch(error => console.log(error));
    }
}

export function fetchProducts() {
    return (dispatch) => {
        axios
            .get(API_URL)
            .then(response => {
                dispatch(productsFetchSuccess(response.data));
            })
            .catch(error => console.log(error));
    }
}

export function deleteCartProduct(id) {

    return (dispatch) => {
        if (!window.confirm('Are you sure you want to delete this product?'))
            return false;

        axios
            .delete(API_URL + '/' + id)
            .then(response => {
                dispatch({
                    type: t.REMOVE,
                    id
                });
            })
            .catch(error => console.log(error));
    }
}