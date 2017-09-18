import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartProducts from './cart/reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    cartProducts,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;