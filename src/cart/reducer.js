import * as t from './actionTypes';
import { List } from 'immutable';

const ACTION_HANDLERS = {
    [t.SET_QUANTITY]: (state, action) => ({
        ...state,
        list: List(state.list).map(item => item.id === action.id ? {...item, selectedQuantity: action.quantity } : item),
    }),
    [t.REMOVE]: (state, action) => {
        let list = {...state.list};
        delete list[action.id];

        return {
            ...state,
            list
        };
    },
    [t.PRODUCTS_FETCH_SUCCESS]: (state, action) => ({
        ...state,
        list: action.items
    })
};

const initialState = {
    list: [],
    lastId: 1000,
    filter: 0
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}