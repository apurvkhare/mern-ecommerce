import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPrompt from './components/LoginPrompt'
import { AppProvider } from './context/AppContext'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Login from './components/Login'

function MernkartApp() {
    return (
        <Router>
            <AppProvider>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/product/:productId'>
                        <ProductDetailsPage />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                </Switch>
                <LoginPrompt />
            </AppProvider>
            {/*
        Home
        Login
        SignUp
        ProductDetails
        Cart
        Checkout
        Orders 
       */}
        </Router>
    )
}

export default MernkartApp
