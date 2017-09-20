import { createSelector } from 'reselect';

const getItemById = (list, id) => list.filter(item => +item.id === +id)[0];

export const productsSelector = store => {
    return [...store.cartProducts.list].map(item => {
        const { title, subtitle, price, quantity, image } = getItemById(item.sku, item.currentSku);
        return {
            ...item,
            title,
            subtitle,
            price,
            quantity,
            image
        }
    });
};


const TotalPriceSelector = (products) => {
    return products.reduce((prev, item) => {
        return item.price * item.selectedQuantity + prev;
    }, 0);
};

export const totalPriceSelector = createSelector(
    productsSelector,
    TotalPriceSelector
);