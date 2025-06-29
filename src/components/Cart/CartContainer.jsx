import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Box, Button, Container, Typography, Card, CardContent, CardMedia, IconButton, Stack, Grid } from "@mui/material";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import CartView from './CartView';

const CartContainer = () => {
    const { cart, removeItem, addToCart, getTotal } = useContext(CartContext);

    const updateQuantity = (item, amount) => {
        const newQuantity = item.quantity + amount;
        if (newQuantity <= 0) {
            removeItem(item.id_variante);
        } else {
            addToCart(item, amount);
        }
    };
 
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            
            <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: 500 }}>
                Tu Carrito de Compras
            </Typography>

            {cart.length === 0 ? (
                <Box textAlign="center" mt={10}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Tu carrito está vacío 💔
                    </Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>
                        Seguir comprando
                    </Button>
                </Box>
            ) : (
                <CartView></CartView>
            )}
        </Container>
    );
};

export default CartContainer;
