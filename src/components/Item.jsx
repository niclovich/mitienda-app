import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Stack, IconButton, Chip, CircularProgress, styled } from "@mui/material";
import { FaHeart, FaShoppingCart ,FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: 12,
  backgroundColor: "#faf9f8",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)"
  }
}));

const ProductImage = styled(CardMedia)({
  height: 320,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)"
  }
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
  "&:hover": {
    backgroundColor: selected ? "#444" : "#f5f5f5"
  }
}));

const Item = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [stockLevel] = useState(product.stock);


  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      return;
    }
  };

  return (
    <StyledCard>
      <Box sx={{ position: "relative" }}>
        <ProductImage
          component="img"
          image={product.image}
          alt={product.name}
          loading="lazy"
        />
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
        <Typography variant="subtitle2" color="text.secondary">
          {product.category }
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {product.name }
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {  product.description || "A warm and stylish cardigan perfect for chilly days."}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Typography variant="h6" component="span">
            {product.price || "$49.99"}
          </Typography>
          <Chip
            size="small"
            label={`${stockLevel} units left`}
            color="primary"
            variant="outlined"
          />
        </Stack>

        <Typography variant="subtitle2" gutterBottom>
          Color:
        </Typography>
        <Stack direction="row" mb={2}>
          {product.color.map((color) => (
            <ColorButton
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              selected={selectedColor === color.name}
              sx={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </Stack>

        <Typography variant="subtitle2" gutterBottom>
          Size:
        </Typography>
        <Stack direction="row" mb={3}>
          {product.size.map((size) => (
            <SizeButton
              key={size}
              onClick={() => setSelectedSize(size)}
              selected={selectedSize === size}
              aria-label={`Select size ${size}`}
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
          > Ver Detalle
          </Button>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default Item;