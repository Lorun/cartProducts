import * as t from './actionTypes';
import { List } from 'immutable';

const ACTION_HANDLERS = {
    [t.SET_QUANTITY]: (state, action) => ({
        ...state,
        list: List(state.list).map(item => item.id === action.id ? {...item, selectedQuantity: action.quantity } : item),
    }),
    [t.REMOVE]: (state, action) => ({
        ...state,
        list: List(state.list).filter(item => item.id !== action.id)
    }),
    [t.PRODUCTS_FETCH_SUCCESS]: (state, action) => ({
        list: action.items,
        isFetching: false
    }),
    [t.SELECT_SKU]: (state, action) => ({
        ...state,
        list: List(state.list).map(item => item.id === action.id ? {...item, currentSku: action.currentSku } : item),
    }),
    [t.TOGGLE_FATCHING]: (state, action) => ({
        ...state,
        isFetching: !state.isFetching
    })
};

const initialState = {
    list: [],
    isFetching: true
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}