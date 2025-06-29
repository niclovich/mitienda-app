import { Snackbar, Alert, Slide } from '@mui/material';

const Toast = ({ open, onClose, message, severity }) => {
    const transition = (props) => <Slide {...props} direction="left" />;

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            TransitionComponent={transition}
        >
            <Alert 
                onClose={onClose} 
                severity={severity} 
                variant="filled" 
                sx={{ width: '100%', boxShadow: 3 }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toast;
