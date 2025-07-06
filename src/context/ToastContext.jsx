import { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Crear el Contexto
const ToastContext = createContext();

// Hook personalizado
export const useToast = () => useContext(ToastContext);

// Provider Global
export const ToastProvider = ({ children }) => {

  // Mensaje de Error
  const showError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 4000,
      style: {
        backgroundColor: '#d32f2f', // Rojo Error
        color: '#fff',
        borderRadius: 8,
        fontWeight: 'bold',
      }
    });
  };

  // Mensaje de Éxito
  const showSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 4000,
      style: {
        backgroundColor: '#2e7d32', // Verde Éxito
        color: '#fff',
        borderRadius: 8,
        fontWeight: 'bold',
      }
    });
  };

 

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
