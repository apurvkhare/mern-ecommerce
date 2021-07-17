import React from 'react'
import { useApp } from '../context/AppContext'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const StyledCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledCartItem =  styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 10px;
    background-color: blueviolet;
    cursor: pointer;
    color: white;
    margin-bottom: 50px;
`

const CartPage = () => {
    const { cart } = useApp()

    const history = useHistory()

    const redirectToCheckout = () => {
        if(localStorage.getItem('token')){
            history.push('/checkout')
            return
        }else{
            history.push('/login')
        }
    }

    return (
        <StyledCartContainer>
            <h2>Cart Items</h2>
            {cart && cart.length !== 0 ? cart.map(cartItem => <StyledCartItem key={cartItem.productId}>
                <h3>Product Name: {cartItem.productName}</h3>
                <h3>Product Qunatity: {cartItem.qty}</h3>
                <h3>Product Price: {cartItem.price}</h3>
                <hr style={{ width: '80%'}}/>
            </StyledCartItem>) : <h3>No Items in cart</h3>}
            <h3>Total Amount : {cart.reduce((amount, cartItem) => amount += cartItem.price * cartItem.qty, 0)}</h3>
            <StyledButton onClick={redirectToCheckout}>Checkout</StyledButton>
        </StyledCartContainer>
    )
}

export default CartPage
