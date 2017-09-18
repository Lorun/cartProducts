import * as t from './actionTypes';
import axios from 'axios';


const API_URL = 'http://59bfe1e6a101d20011afd595.mockapi.io/products';

export const remove = id => ({
    type: t.REMOVE,
    id
});

export const setQuantity = (id, quantity) => ({
    type: t.SET_QUANTITY,
    id,
    quantity
});

export const fetchProducts = () => (dispatch) => {
    axios.get(API_URL)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};