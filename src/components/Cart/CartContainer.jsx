import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div>
                    <h2>Tu carrito está vacío</h2>
                </div>
            ) : (
                <div>
                    <h2>Productos en tu carrito:</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id_variante}>
                                {item.nombre} - Cantidad: {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default CartContainer;
