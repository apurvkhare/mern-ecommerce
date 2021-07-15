import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { getProductDetails } from '../Mernkart.service'
import { FETCH_STATE, ACTION_TYPES, dataReducer, initialState } from '../reducer/DataReducer'
import { useApp } from '../context/AppContext'

const StyledPDP = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;
    margin: 100px 75px;
    align-items: center;
`

const StyledImage = styled.img`
    height: 500px;
    width: 300px;
    border-radius: 10px;
`

const StyledProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: aliceblue;
    padding: 10px;
`

const StyledProductName = styled.h3`
    font-size: large;
`

const StyledDescription = styled.p`
`

const StyledQuantity = styled.p`
`

const StyledPrice = styled.p`

`

const StyledAddToCart = styled.button`
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`

const ProductDetailsPage = () => {
    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const { data: product, fetching, error } = state

    const { productId } = useParams()

    
    const { setIsPromptOpen } = useApp()

    const handleAddToCart = () => {
        setIsPromptOpen(true)
    }

    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE,
        })
        const data = await getProductDetails(productId)
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
        <StyledPDP>
            <StyledImage src='https://picsum.photos/300/500'/>
            <StyledProductDetails>
                <StyledProductName>{product?.productName}</StyledProductName>
                <StyledDescription>{product?.description}</StyledDescription>
                <StyledQuantity>Available: {product?.qty}</StyledQuantity>
                <StyledPrice>Price: &#8377; {product?.price}</StyledPrice>
                <StyledAddToCart onClick={handleAddToCart}>Add to cart</StyledAddToCart>
            </StyledProductDetails>
        </StyledPDP>
    )
}

export default ProductDetailsPage
