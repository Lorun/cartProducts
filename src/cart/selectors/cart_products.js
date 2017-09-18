import { createSelector } from 'reselect';

const categories = store => store.categories.list;

const CartProductsSelector = (products) => {
    categories.map((cat) => {
        categoriesById[cat.id] = cat.name;
        return true;
    });
    return categoriesById;
};

export default createSelector(
    categories,
    getCategoriesById
);