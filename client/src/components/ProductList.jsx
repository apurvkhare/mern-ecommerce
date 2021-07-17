import React from 'react'
import Product from './Product'
import styled from 'styled-components'
import { getAllProducts } from '../Mernkart.service'
import { FETCH_STATE, ACTION_TYPES, dataReducer, initialState } from '../reducer/DataReducer'

const StyledProductList = styled.div`
    margin: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
`

const ProductList = () => {
    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const { data: products, fetching, error } = state

    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE,
        })
        const data = await getAllProducts()
        console.log('inside fetchData: ', data)
        if (data === null)
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_FAILURE,
            })
        else {
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_SUCCESS,
                payload: {
                    data,
                },
            })
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    if (fetching === FETCH_STATE.PENDING)
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Loading....</h1>
            </div>
        )

    if (fetching === FETCH_STATE.REJECTED) {
        console.log('here')
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{error}</h2>
            </div>
        )
    }

    return (
        <StyledProductList>
            {products &&
                products.length !== 0 &&
                products.map(product => (
                    <Product
                        key={product.productId}
                        name={product.productName}
                        price={product.price}
                        imageUrl={product.image}
                        productId={product.productId}
                    />
                ))}
        </StyledProductList>
    )
}

export default ProductList
