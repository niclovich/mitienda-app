import { createContext, useContext, useState } from 'react';
import Toast from '../components/shared/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

    const showToast = (message, severity = "success") => {
        setToast({ open: false, message: "", severity });
        setTimeout(() => {
            setToast({ open: true, message, severity });
        }, 100);
    };

    const handleClose = () => {
        setToast({ ...toast, open: false });
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast 
                open={toast.open} 
                onClose={handleClose} 
                message={toast.message} 
                severity={toast.severity} 
            />
        </ToastContext.Provider>
    );
};
