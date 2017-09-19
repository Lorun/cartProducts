import React from 'react';

const calculateCheckedQuantity = (currentValue, available, isIncrease) => {
    return isIncrease
        ? +currentValue >= +available ? +available : +currentValue + 1
        : +currentValue <= 1 ? 1 : +currentValue - 1;
};

// component part
export const CartProduct = ({ item, actions }) => {
    const { id, selectedQuantity, image, title, subtitle, price, quantity, currentSku, sku: skuList } = item;
    const styleImage = {backgroundImage: 'url(' + image + ')'};

    const increasedQuantity = calculateCheckedQuantity(selectedQuantity, quantity, true);
    const isIncreaseDisabled = +selectedQuantity >= +quantity;

    const decreasedQuantity = calculateCheckedQuantity(selectedQuantity, quantity, false);
    const isDecreaseDisabled = +selectedQuantity <= 1;

    return (
        <div className="cart-product">
            <button onClick={() => actions.remove(id)}>Delete</button>

            <figure className="product-image" style={styleImage} > </figure>

            <div className="product-body">
                <div className="product-title">{title}</div>
                <p>{subtitle}</p>
                <select name="sku">
                    <option>SKU</option>
                    {skuList.map((sku) => (<option key={sku.id} value={sku.id} disabled={+sku.id === currentSku}>{sku.title}: {sku.price} €</option>))}
                </select>
            </div>

            <div className="product-quantity">
                <button className="btn btn--sm" onClick={() => actions.setQuantity(id, decreasedQuantity)} disabled={isDecreaseDisabled}>-</button>
                <span className="product-quantityValue">{selectedQuantity}</span>
                <button className="btn btn--sm" onClick={() => actions.setQuantity(id, increasedQuantity)} disabled={isIncreaseDisabled}>+</button>
            </div>

            <div className="product-price">{+price * selectedQuantity}.00 €</div>
        </div>
    );
};

export default CartProduct;