import { createContext, useState, useEffect } from "react";
import { useToast } from '../context/ToastContext';

// Crear nuestro contexto
export const CartContext = createContext();

// Crear el proveedor
export const CartProvider = ({ children }) => {
    const { showError, showSuccess, showPurchase } = useToast();
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

            console.log("Producto ya en el carrito, actualizando cantidad");
            showSuccess('Producto agregado al carrito');
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
        const updatedCart = cart
            .map((item) =>
            item.id_variante === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
            .filter((item) => item.quantity > 0); // elimina los que quedan en 0

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

    //
    const confirmPurchase = (orderId) => {
        if (cart.length === 0) {
            showError('The cart is empty');
            return;
        }
        // You can add purchase logic here, such as sending the data to a server
        showSuccess("¡Gracias por tu compra! Estamos preparando tu pedido numero "+orderId+".");
        clearCart();
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
                confirmPurchase,
            }}>
            {children}
        </CartContext.Provider>
    );
};
