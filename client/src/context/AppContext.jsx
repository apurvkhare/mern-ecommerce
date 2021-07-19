import React from 'react'
import {
    customerReducer,
    initialCustomerState,
    ACTION_TYPES
} from '../reducer/CustomerReducer'

const AppContext = React.createContext()

export const useApp = () => {
    const context = React.useContext(AppContext)
    if (!context)
        throw new Error(
            'useApp can only be used in a children component of AppProvider'
        )
    return context
}

export const AppProvider = ({ children }) => {
    const [isPromptOpen, setIsPromptOpen] = React.useState(false)
    const [isAccountOpen, setIsAccountOpen] = React.useState(false)
    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false)
    const [snackbarMessage, setSnackbarMessage] = React.useState('')
    const [state, dispatch] = React.useReducer(
        customerReducer,
        initialCustomerState
    )

    const { cart, customer } = state

    const addToCart = productData => {
        if (state.cart.find(item => item.productId === productData.productId)) {
            dispatch({
                type: ACTION_TYPES.UPDATE_CART_ITEM,
                payload: {
                    id: productData.productId,
                },
            })
        } else {
            dispatch({
                type: ACTION_TYPES.ADD_CART_ITEM,
                payload: {
                    item: productData,
                },
            })
        }
    }

    const value = {
        isPromptOpen,
        isAccountOpen,
        isSnackbarOpen,
        snackbarMessage,
        cart,
        customer,
        setIsPromptOpen,
        setIsAccountOpen,
        setIsSnackbarOpen,
        setSnackbarMessage,
        addToCart,
        dispatch
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
