import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import * as CartActions from '../actions';
import { totalPriceSelector, productsSelector } from '../selectors/cart_products';

import './cart.css';

// component part
class CartList extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, totalPrice, setQuantity, deleteCartProduct, onSelectSku, isFetching } = this.props;

        if (isFetching) return (<div>Loading...</div>);

        return (
            <div className="cart">
                {isFetching
                    ? (<div>Loading...</div>)
                    : products.map(item => (
                        <CartProduct
                            key={item.id}
                            item={item}
                            actions={{setQuantity, deleteCartProduct, onSelectSku}}
                        />
                    ))
                }

                <div className="cart-totalPrice">{totalPrice}.00 €</div>
            </div>
        );
    }
}



// container part
const mapStateToProps = state => ({
    products: productsSelector(state),
    totalPrice: totalPriceSelector(state),
    isFetching: state.cartProducts.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators({...CartActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartList);