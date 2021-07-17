import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPrompt from './components/LoginPrompt'
import { AppProvider } from './context/AppContext'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SnackbarAlert from './components/SnackbarAlert'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'

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
                        <LoginPage />
                    </Route>
                    <Route exact path='/register'>
                        <RegisterPage />
                    </Route>
                    <Route exact path='/cart'>
                        <CartPage />
                    </Route>
                    <Route exact path='/checkout'>
                        <CheckoutPage />
                    </Route>
                    <Route exact path='/orders'>
                        <OrdersPage />
                    </Route>
                </Switch>
                <LoginPrompt />
                <SnackbarAlert />
            </AppProvider>
        </Router>
    )
}

export default MernkartApp
