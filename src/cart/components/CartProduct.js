import React from 'react';

// component part
export const CartProduct = ({ item, actions }) => {
    const { id, selectedQuantity, sku: skuList } = item;
    const { image, title, subtitle, price, quantity } = skuList[0];
    const styleImage = 'background-image: url(' + item.image + ')';

    return(
        <div className="cart-product">
            <button onClick={() => actions.remove(id)}>Delete</button>

            <figure className="product-image" style={styleImage}> </figure>

            <div className="product-body">
                <div className="product-title">{title}</div>
                <p>{subtitle}</p>
                <select name="sku">

                </select>
            </div>

            <div className="product-quantity">
                <button className="btn btn--sm">-</button>
                <span className="product-quantityValue">{selectedQuantity}</span>
                <button className="btn btn--sm">+</button>
            </div>

            <div className="product-price">{price} €</div>
        </div>
    );
};

export default CartProduct;