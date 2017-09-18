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
    [t.SELECT_SKU]: (state, action) => ({
        ...state,
        lastId: state.lastId + 1
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