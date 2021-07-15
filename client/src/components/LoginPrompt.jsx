import React from 'react'
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import { useHistory } from 'react-router'
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

const LoginPrompt = () => {
    const { isPromptOpen, setIsPromptOpen } = useApp()

    const handleClose = () => {
        setIsPromptOpen(false)
    }

    const history = useHistory()

    const redirectToLogin = () => {
        setIsPromptOpen(false)
        history.push('/login')
    }

    return (
        <div>
            <Modal
                open={isPromptOpen}
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
                    <h3>Please Login to continue</h3>
                    <button type onClick={redirectToLogin}>
                        Login
                    </button>
                </StyledPopup>
            </Modal>
        </div>
    )
}

export default LoginPrompt
