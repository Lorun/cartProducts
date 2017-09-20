import React from 'react';

import './cart-product.css';

const calculateCheckedQuantity = (currentValue, available, isIncrease) => {
    return isIncrease
        ? +currentValue >= +available ? +available : +currentValue + 1
        : +currentValue <= 1 ? 1 : +currentValue - 1;
};

// component part
export const CartProduct = ({ item, actions }) => {
    const { id, selectedQuantity, image, title, subtitle, price, quantity, currentSku, sku: skuList } = item;
    const styleImage = {backgroundImage: 'url(http://lorempixel.com/output/' + image + ')'};

    const increasedQuantity = calculateCheckedQuantity(selectedQuantity, quantity, true);
    const isIncreaseDisabled = +selectedQuantity >= +quantity;

    const decreasedQuantity = calculateCheckedQuantity(selectedQuantity, quantity, false);
    const isDecreaseDisabled = +selectedQuantity <= 1;

    return (
        <div className="cart-product">
            <button onClick={() => actions.deleteCartProduct(id)} className="cart-deleteBtn" title="Delete">&nbsp;</button>

            <figure className="product-imageHolder">
                <span className="product-image" style={styleImage}> </span>
            </figure>

            <div className="product-body">
                <div className="product-title">{title}</div>
                <p className="product-subtitle">{subtitle}</p>
                <select name="sku" onChange={(e) => actions.onSelectSku(e, id)} className="product-select">
                    <option value={currentSku}>SKU</option>
                    {skuList.map((sku) => (
                        <option key={sku.id} value={sku.id} disabled={sku.id === currentSku}>{sku.title}</option>
                    ))}
                </select>
            </div>

            <div className="product-quantity">
                <button className="btn btn--quantity btn--decrease"
                        onClick={() => actions.setQuantity(id, decreasedQuantity)}
                        disabled={isDecreaseDisabled}>-
                </button>
                <span className="product-quantityValue">{selectedQuantity}</span>
                <button className="btn btn--quantity btn--increase"
                        onClick={() => actions.setQuantity(id, increasedQuantity)}
                        disabled={isIncreaseDisabled}>+
                </button>
            </div>

            <div className="product-price">{price * selectedQuantity}.00 €</div>
        </div>
    );
};

export default CartProduct;