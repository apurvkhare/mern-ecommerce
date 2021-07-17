import React, {useState} from 'react'
import styled from 'styled-components'
import { useApp } from '../context/AppContext'
import { checkout } from '../Mernkart.service'

const StyledCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const StyledButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 10px;
    background-color: blueviolet;
    cursor: pointer;
    color: white;
    margin: 30px 0;
`

const StyledInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid blueviolet;
`

const CheckoutPage = () => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [state, setState] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('Credit Card')

    const { customer, setIsSnackbarOpen, setSnackbarMessage, cart } = useApp()

    const handleProceedToPay = () => {
        if([address, city, pincode, state, paymentMethod].includes('')){
            setSnackbarMessage('Please enter valid address details')
            setIsSnackbarOpen(true)
            return
        }
        const userId = customer.customerId
        const shippingAddress = {
            address,
            city,
            pinCode: pincode,
            state
        }
        const totalPrice = cart.reduce((amount, cartItem) => amount += cartItem.price * cartItem.qty, 0)
        checkout(userId, cart, shippingAddress, paymentMethod, totalPrice)
    }

    return (
        <StyledCheckoutContainer>
            <h2>Checkout Page</h2>
            <h3>Customer Name: {customer.customerName}</h3>
            <h3>Enter Delivery Address</h3>
            <StyledInput type="text" placeholder="Enter Address" value={address} onChange={e => setAddress(e.target.value)}/>
            <StyledInput type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
            <StyledInput type="text" placeholder="Pincode" value={pincode} onChange={e => setPincode(e.target.value)}/>
            <StyledInput type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)}/>
            <h3>Preferred Payment method</h3>
            <select onChange={e => setPaymentMethod(e.target.value)} value={paymentMethod}>
                <option value="Credit Card">Credit card</option>
                <option value="Debit Card">Debit card</option>
                <option value="UPI">UPI</option>
            </select>
            <StyledButton onClick={handleProceedToPay}>Proceed to Pay</StyledButton>
        </StyledCheckoutContainer>
    )
}

export default CheckoutPage
