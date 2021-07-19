import React from 'react'
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import { useApp } from '../context/AppContext'

const StyledPopup = styled.div`
    width: 350px;
    height: 350px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AccountPrompt = () => {
    const { isAccountOpen, setIsAccountOpen, customer, setIsSnackbarOpen, setSnackbarMessage } = useApp()

    const handleClose = () => {
        setIsAccountOpen(false)
    }

    const handleLogout = () => { 
        localStorage.removeItem('token')
        setIsAccountOpen(false)
        setSnackbarMessage("Logged out successfully")
        setIsSnackbarOpen(true)
    }

    return (
        <div>
            <Modal
                open={isAccountOpen}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <StyledPopup>
                    <h3>Welcome, {customer.customerName}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </StyledPopup>
            </Modal>
        </div>
    )
}

export default AccountPrompt