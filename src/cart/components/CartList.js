import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import * as CartActions from '../actions';

// component part
const CartList = ({ products, remove }) => (
    <div>
        {products.map(item => (
            <CartProduct key={item.id} item={item} actions={{ remove }} />
        ))}
    </div>
);


// container part
const mapStateToProps = state => ({
    products: [...state.cartProducts.list],
});

const mapDispatchToProps = dispatch => bindActionCreators({...CartActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartList);