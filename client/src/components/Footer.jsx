import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid black;
`

const StyledCopyright = styled.h3`
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledCopyright>&copy; Mernkart 2021</StyledCopyright>
        </StyledFooter>
    )
}

export default Footer
