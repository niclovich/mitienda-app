import { createContext, useState } from "react";

//crear nuestro contexto.
export const CartContext = createContext()
// crear el proveedor 
export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])
    //datos y logica del carrito

    //funciones necesarias para el carrito
    //Agregar un producto al carrito
    const addToCart = (item,quantity )=> {
        // Verificar si el producto ya está en el carrito
        if (isInCart(item.id_variante)) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id_variante === item.id_variante) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        }
        else{
            // Si el producto no está en el carrito, agregarlo
            setCart([...cart, { ...item, quantity }]);
            console.log("Producto agregado al carrito:", cart);

        }
        //setCart([...cart, { ...item, quantity }]);

    }   

    const removeItem = (id) => {
        // Eliminar un producto del carrito por su id
        const updatedCart = cart.filter((item) => item.id_variante !== id);
        setCart(updatedCart);
    };

    const clearCart = () => {
        // Limpiar el carrito
        setCart([]);
    }




    //Verificar si un producto ya está en el carrito
    const isInCart = (id) => {
        return cart.find((item) => item.id_variante === id);
    };

    const getTotalQuantity = () => {
        console.log("Carrito actual:", cart);
        // Obtener la cantidad total de un producto en el carrito
        return cart.reduce((total, item) => total + item.quantity, 0);

    };
    //Calcular el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    };
    return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getTotalQuantity }}>
        {children}
    </CartContext.Provider>
    );


}