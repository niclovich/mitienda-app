import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const CartItemCard = ({ item, updateQuantity, removeItem }) => {
  const precioOriginal = item.precio;
  const descuento = Math.round(100 - (item.precio * 100) / precioOriginal);
  const subtotal = item.precio * item.quantity;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        border: "1px solid #eee",
        borderRadius: 2,
        flexWrap: "wrap",
        gap: 5,
      }}
    >
      {/* Columna: Imagen e Info */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1, minWidth: 250 }}>
        <Box
          component="img"
          src={item.imagen}
          alt={item.nombre}
          sx={{
            width: 70,
            height: 70,
            borderRadius: 2,
            objectFit: "cover",
            border: "1px solid #ddd",
            mr: 2,
          }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>{item.nombre}</Typography>
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={() => removeItem(item.id_variante)}
            sx={{ textTransform: "none", fontSize: "0.8rem", mt: 0.5 }}
            startIcon={<FiTrash2 />}
          >
            Eliminar
          </Button>
        </Box>
      </Box>

      {/* Controles de cantidad */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton size="small" onClick={() => updateQuantity(item.id_variante, -1)}>
          <FiMinus />
        </IconButton>
        <Typography>{item.quantity}</Typography>
        <IconButton size="small" onClick={() => updateQuantity(item.id_variante, 1)}>
          <FiPlus />
        </IconButton>
      </Box>

      {/* Precio y Subtotal */}
      <Box sx={{ textAlign: "right", minWidth: 150 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ${item.precio.toLocaleString()}
        </Typography>

        <Typography variant="caption" sx={{ color: "grey" }}>
          +{item.stock} disponibles
        </Typography>

        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: "bold" }}>
          Subtotal: ${subtotal.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartItemCard;
