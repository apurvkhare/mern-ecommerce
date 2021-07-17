import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useApp } from '../context/AppContext'
import { loginUser } from '../Mernkart.service'
import { ACTION_TYPES } from '../reducer/CustomerReducer'

const StyledLoginContainer = styled.div`
    display: flex;
    margin: 200px 0;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const StyledInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid blueviolet;
`

const StyledButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 10px;
    background-color: blueviolet;
    cursor: pointer;
    color: white;
`

const StyledRegisterLink = styled.p`
    text-decoration: underline;
    cursor: pointer;
    color: deepskyblue;
`

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setIsSnackbarOpen, setSnackbarMessage, dispatch} = useApp()


    const history = useHistory()

    const login = async () => {
        const userData = await loginUser(email, password)
        if(userData !== null){
            dispatch({
                type: ACTION_TYPES.SET_CUSTOMER_DETAILS,
                payload: {
                    customerDetails: userData
                }
            })
            localStorage.setItem('token', userData.accessToken)
            setSnackbarMessage('Logged in successfully')
            setIsSnackbarOpen(true)
            history.push('/')
        }else{
            setSnackbarMessage('Login unsuccessful, Please try again')
            setIsSnackbarOpen(true)
        }

    }

    const handleLogin = () => {
        if (email.toString().trim() === '' || password.toString().trim() === ''){
            setSnackbarMessage('Please enter valid Email and password')
            setIsSnackbarOpen(true)
            return
        }
        login()
    }

    const redirectToRegister = () => history.push('/register')

    return (
        <StyledLoginContainer>
            <StyledInput
                type='text'
                placeholder='Enter your email id'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <StyledInput
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <StyledButton onClick={handleLogin}>Login</StyledButton>
            <StyledRegisterLink onClick={redirectToRegister}>
                New User? Register here
            </StyledRegisterLink>
        </StyledLoginContainer>
    )
}

export default LoginPage
