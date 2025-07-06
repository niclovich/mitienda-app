import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Box, Button, Typography, Grid, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItemCard from "./CartItemCard";
import OrderSummary from "../OrderSummary/OrderSummary";

const CartView = () => {
  const { cart, removeItem, clearCart, getTotal, updateQuantity } =
    useContext(CartContext);
  const total = getTotal();

  return (
<Container maxWidth="xl" >
  {/* Encabezado de botones fuera del Grid de columnas */}
  <Box
    sx={{
      mb: 4,
      display: "flex",
      justifyContent: "flex-start",
      gap: 2,
      flexWrap: "wrap",
    }}
  >
    <Button
      variant="contained"
      size="medium"
      color="error"
      startIcon={<DeleteIcon />}
      sx={{
        px: 3,
        borderRadius: 2,
        boxShadow: 2,
        "&:hover": { bgcolor: "error.dark" },
      }}
      onClick={clearCart}
    >
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
  <Grid container columns={12} columnSpacing={3}>

    {/* Productos: siempre 8 columnas */}
    <Grid xs={8} sx={{ mb: 4 }}>
      <Box
        sx={{
          maxHeight: "750px",
          overflowY: "auto",
          pr: 1,
          borderRadius: 2,
        }}
      >
        {cart.length === 0 ? (
          <Typography variant="h6">Tu carrito está vacío.</Typography>
        ) : (
          cart.map((item) => (
            <CartItemCard
              key={item.id_variante}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))
        )}
      </Box>
    </Grid>

    {/* Resumen: siempre 4 columnas */}
    <Grid xs={4} sx={{ mb: 4 }}>
      <OrderSummary
        cart={cart}
        total={total}
        subtotal={total}
        sx={{ width: "100%" }}
        context="cart"
      />
    </Grid>

  </Grid>



</Container>


  );
};

export default CartView;
