import { createSelector } from 'reselect';

const getItemById = (list, id) => list.filter(item => +item.id === +id)[0];

const cartProducts = store => store.cartProducts.list;

export const productsSelector = store => {
    return [...store.cartProducts.list].map(item => {
        const sku = getItemById(item.sku, item.currentSku);
        return {
            ...item,
            title: sku.title,
            subtitle: sku.subtitle,
            price: sku.price,
            quantity: sku.quantity,
            image: sku.image
        }
    });
};



//const getProduct = store =>

const TotalPriceSelector = (products) => {
    return products.reduce((prev, item) => {
        return +item.price * item.selectedQuantity + prev;
    }, 0);
};

// const ProductCurrentSkuSelector = (product) = {
//
// };

export default createSelector(
    productsSelector,
    TotalPriceSelector
);