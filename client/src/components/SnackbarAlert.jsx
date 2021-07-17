import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useApp } from '../context/AppContext';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const SnackbarAlert = () => {
    const { isSnackbarOpen, setIsSnackbarOpen, snackbarMessage} = useApp()

    const handleSnackbarClose = () =>  setIsSnackbarOpen(false)

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={isSnackbarOpen}
            autoHideDuration={2500}
            onClose={handleSnackbarClose}
        >
            <Alert onClose={handleSnackbarClose} severity='info'>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarAlert
