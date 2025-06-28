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
        console.log("Producto agregado al carrito:", item, "Cantidad:", quantity);
        setCart([...cart, { ...item, quantity }]);
        console.log("Estado del carrito:", cart);
    }   
    return (
    <CartContext.Provider value={{ cart,addToCart }}>
        {children}
    </CartContext.Provider>
    );

}