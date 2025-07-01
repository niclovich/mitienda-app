import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Box, Button, Typography, Card, CardContent, CardMedia, IconButton, Stack, Grid } from "@mui/material";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ColorSwatch from "../shared/ColorSwatch";
const CartView = () => {
  const { cart, removeItem, clearCart, getTotal, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 3, textAlign: "center" }}>
        <Button variant="contained" size="medium" color="error" startIcon={<DeleteIcon />} sx={{ px: 3, borderRadius: 2, boxShadow: 2, "&:hover": { bgcolor: "error.dark" } }} onClick={() => clearCart()}>
            Vaciar carrito
        </Button>
            <Button 
            variant="outlined" 
            size="medium" 
            startIcon={<ShoppingCartIcon />} 
            sx={{ px: 3, borderRadius: 2, boxShadow: 1 }} 
            component={Link} 
            to="/"
            >
            Seguir comprando
            </Button>

        </Box>


    {cart.map((item) => (
        <Grid item xs={12} key={item.id_variante}>
        <Card sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: 3, boxShadow: 3, mb: 2 }}>
            
            <CardMedia component="img" image={item.imagen} alt={item.nombre} sx={{ width: 100, height: 100, borderRadius: 2, objectFit: "cover", mr: 2 }} />
            
            <CardContent sx={{ flex: 1, p: 0 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>{item.nombre}</Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }} >Color: {item.color?.name}</Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Talle: {item.talle}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Precio unitario: ${item.precio}</Typography>

            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                <IconButton size="small" onClick={() => updateQuantity(item.id_variante, -1)}><FiMinus /></IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton size="small" onClick={() => updateQuantity(item.id_variante, 1)}><FiPlus /></IconButton>
            </Stack>

            <Typography sx={{ mt: 1, fontWeight: "bold" }}>Subtotal: ${item.precio * item.quantity}</Typography>
            </CardContent>

            <IconButton color="error" onClick={() => removeItem(item.id_variante)}><FiTrash2 /></IconButton>
            
        </Card>
        </Grid>


    ))}

      </Grid>

      <Grid item xs={12} md={3}>
        <Box sx={{ mt: 4, textAlign: "right" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Total: ${getTotal().toFixed(2)}</Typography>
        <Button variant="contained" size="large" color="success" startIcon={<ShoppingCartIcon />} sx={{ px: 3, borderRadius: 2, boxShadow: 2, "&:hover": { bgcolor: "success.dark" } }}>
        Finalizar compra
        </Button>

        </Box>
      </Grid>
    </Grid>
  );
};

export default CartView;
