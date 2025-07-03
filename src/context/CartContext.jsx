import { createContext, useState, useEffect } from "react";
import { useToast } from '../context/ToastContext';

// Crear nuestro contexto
export const CartContext = createContext();

// Crear el proveedor
export const CartProvider = ({ children }) => {
    const { showToast } = useToast();
    // Inicializar carrito desde localStorage o como array vacío
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Agregar un producto al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id_variante)) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id_variante === item.id_variante
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            );
            showToast('Producto agregado al carrito', 'success');
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Eliminar un producto por ID
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id_variante !== id);
        setCart(updatedCart);
    };

    // Limpiar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Actualizar cantidad de un producto
    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map((item) =>
            item.id_variante === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
        );
        setCart(updatedCart);
    };

    // Verificar si ya está en el carrito
    const isInCart = (id) => {
        return cart.some((item) => item.id_variante === id);
    };

    // Obtener cantidad total de productos
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Calcular el total en $$
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeItem,
                clearCart,
                updateQuantity,
                getTotalQuantity,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
