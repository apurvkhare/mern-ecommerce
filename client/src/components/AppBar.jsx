import { IconButton } from '@material-ui/core'
import { AccountCircleOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const StyledAppBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fcba03;
`

const AppName = styled.h3`
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    padding-left: 100px;
`

const SearchBar = styled.input`
    width: 400px;
    border-radius: 5px;
    height: 30px;
`

const StyledIconContainer = styled.div`
    display: flex;
    gap: 20px;
`

const AppBar = () => {
    return (
        <StyledAppBar>
            <AppName>Mernkart</AppName>
            <SearchBar type='search' placeholder='Enter Product Name' />
            <StyledIconContainer>
                <IconButton>
                    <ShoppingCartOutlined />
                </IconButton>
                <IconButton>
                    <AccountCircleOutlined />
                </IconButton>
            </StyledIconContainer>
        </StyledAppBar>
    )
}

export default AppBar
