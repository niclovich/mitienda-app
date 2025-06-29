import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Stack, IconButton, Chip, styled } from "@mui/material";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ColorSwatch from "./shared/ColorSwatch";

const StyledCard = styled(Card)({
  maxWidth: 345,
  borderRadius: 12,
  backgroundColor: "#faf9f8",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  "&:hover": { transform: "translateY(-4px)" }
});

const ProductImage = styled(CardMedia)({
  height: 320,
  transition: "transform 0.3s ease",
  "&:hover": { transform: "scale(1.05)" }
});

const ColorButton = styled(IconButton)(({ selected }) => ({
  width: 32,
  height: 32,
  border: selected ? "2px solid #000" : "1px solid #ddd",
  margin: "0 4px"
}));

const SizeButton = styled(Button)(({ selected }) => ({
  borderRadius: 20,
  minWidth: 48,
  margin: "0 4px",
  backgroundColor: selected ? "#333" : "transparent",
  color: selected ? "#fff" : "#333",
  border: "1px solid #333",
  "&:hover": { backgroundColor: selected ? "#444" : "#f5f5f5" }
}));

const OfertaBadge = styled(Box)({
  position: "absolute",
  top: 8,
  left: 8,
  backgroundColor: "#e61835",
  color: "#fff",
  padding: "2px 8px",
  borderRadius: 8,
  fontSize: 12,
  fontWeight: "bold",
  zIndex: 2
});

const Item = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const colors = Array.from(new Map(product.variantes.map(v => [v.color.name, v.color])).values());

  const availableSizes = product.variantes
    .filter(v => !selectedColor || v.color.name === selectedColor)
    .map(v => v.talle)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleAddToCart = () => {
    const varianteSeleccionada = product.variantes.find(
      v => v.color.name === selectedColor && v.talle === selectedSize
    );

    if (!varianteSeleccionada || varianteSeleccionada.stock <= 0) {
      alert("Selecciona una variante válida con stock.");
      return;
    }

    console.log("Producto agregado:", {
      id_producto: product.id,
      nombre: product.nombre,
      precio: product.precio,
      id_variante: varianteSeleccionada.id_variante,
      talle: varianteSeleccionada.talle,
      color: varianteSeleccionada.color,
      cantidad: 1
    });
  };

  return (
    <StyledCard>
      <Box sx={{ position: "relative" }}>
        
        {product.oferta && (
          <OfertaBadge>OFERTA</OfertaBadge>
        )}

        <ProductImage component="img" image={product.imagen} alt={product.nombre} loading="lazy" />

        <IconButton
          aria-label="add to favorites"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255,255,255,0.8)"
          }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart color={isFavorite ? "#ff4444" : "#666"} />
        </IconButton>
      </Box>

      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{product.categoria}</Typography>
        <Typography variant="h5" component="h2" gutterBottom>{product.nombre}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.descripcion || "Descripción del producto"}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Typography variant="h6" component="span">${product.precio}</Typography>
          <Chip size="small" label={`${product.variantes.reduce((acc, v) => acc + v.stock, 0)} unidades disponibles`} color="primary" variant="outlined" />
        </Stack>

        <Typography variant="subtitle2" gutterBottom>Color:</Typography>
        <Stack direction="row" mb={2}>
          {colors.map(color => (
            <ColorSwatch
              key={color.name}
              onClick={() => {
                setSelectedColor(color.name);
                setSelectedSize("");
              }}
              selected={selectedColor === color.name}
              sx={{ backgroundColor: color.value }}
              aria-label={`Seleccionar color ${color.name}`}
            />
          ))}
        </Stack>


        <Typography variant="subtitle2" gutterBottom>Talle:</Typography>
        <Stack direction="row" mb={3}>
          {availableSizes.map(size => (
            <SizeButton
              key={size}
              onClick={() => setSelectedSize(size)}
              selected={selectedSize === size}
              aria-label={`Seleccionar talle ${size}`}
            >
              {size}
            </SizeButton>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<FaShoppingCart />}
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            sx={{
              borderRadius: 2,
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#444" },
              flex: 1
            }}
          >
            Agregar
          </Button>

          <Button
            variant="contained"
            fullWidth
            startIcon={<FaSearch />}
            component={Link}
            to={`/item/${product.id}`}
            sx={{
              borderRadius: 2,
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#444" },
              flex: 1
            }}
          >
            Ver Detalle
          </Button>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default Item;
