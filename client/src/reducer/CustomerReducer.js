export const ACTION_TYPES = {
    SET_CUSTOMER_DETAILS: 'SET_CUSTOMER_DETAILS',
    SET_ORDER_DETAILS: 'SET_ORDER_DETAILS',
    ADD_CART_ITEM: 'ADD_CART_ITEM',
    UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
    CLEAR_CART_ITEMS: 'CLEAR_CART_ITEMS',
    CLEAR_ALL_DATA: 'CLEAR_ALL_DATA',
    SET_PAYMENT_STATUS: 'SET_PAYMENT_STATUS',
}

export const initialCustomerState = {
    customer: {},
    orders: [],
    cart: [],
    paymentStatus: false,
}

export const customerReducer = (state = initialCustomerState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CUSTOMER_DETAILS: {
            return {
                ...state,
                customer: action.payload.customerDetails,
            }
        }

        case ACTION_TYPES.SET_ORDER_DETAILS: {
            return {
                ...state,
                orders: action.payload.orders,
            }
        }

        case ACTION_TYPES.ADD_CART_ITEM: {
            const newCart = [...state.cart, action.payload.item]

            return {
                ...state,
                cart: newCart,
            }
        }

        case ACTION_TYPES.UPDATE_CART_ITEM: {
            const newCart = state.cart.map(item => {
                if (item.productId === action.payload.id) item.qty += 1
                return item
            })

            return {
                ...state,
                cart: newCart,
            }
        }

        case ACTION_TYPES.CLEAR_CART_ITEMS: {
            return {
                ...state,
                cart: []
            }
        }

        case ACTION_TYPES.CLEAR_ALL_DATA: {
            return {
                ...state,
                ...initialCustomerState
            }
        }

        default:
            return state
    }
}
