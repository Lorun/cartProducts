import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import * as CartActions from '../actions';
import totalPriceSelector, { productsSelector } from '../selectors/cart_products';

// component part
class CartList extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                {this.props.products.map(item => (
                    <CartProduct key={item.id} item={item} actions={{setQuantity: this.props.setQuantity, remove: this.props.remove}} />
                ))}

                <div className="cart-totalPrice">{this.props.totalPrice} €</div>
            </div>
        );
    }
}



// container part
const mapStateToProps = state => ({
    products: productsSelector(state),
    totalPrice: totalPriceSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({...CartActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartList);