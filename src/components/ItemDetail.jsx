
import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Select, MenuItem, IconButton, Collapse, Card, CardContent, styled, ImageList, ImageListItem } from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)"
  }
}));

const ColorSwatch = styled(Button)(({ selected }) => ({
  width: 40,
  height: 40,
  minWidth: "unset",
  borderRadius: "50%",
  margin: "0 8px",
  border: selected ? "2px solid #000" : "1px solid #ddd"
}));

// Added: Additional product images array
const productImages = [
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
  "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8",
  "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91",
  "https://images.unsplash.com/photo-1583745095368-9914d429d124"
];

const ItemDetail = ({product}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("beige");
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState("material");
  const [mainImage, setMainImage] = useState(productImages[0]);


  const handleSectionToggle = (section) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Imagenes */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", overflow: "hidden", mb: 2 }}>
            <ProductImage
              src={mainImage}
              alt="Knitted Cardigan"
              loading="lazy"
              sx={{ height: 500, objectFit: "cover" }}
            />
          </Box>
          <ImageList cols={4} gap={8} sx={{ mt: 2 }}>
            {productImages.map((img, index) => (
              <ImageListItem 
                key={index} 
                sx={{ 
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid #F5E6E8" : "none",
                  "&:hover": { opacity: 0.8 }
                }}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  loading="lazy"
                  style={{ height: 100, objectFit: "cover" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        {/* Detalles del producto */}
        <Grid  sx={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {product.brand}
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h5" component="span">
              ${product.price}
            </Typography>
            {product.originalPrice && (
              <Typography
                variant="body1"
                component="span"
                sx={{ textDecoration: "line-through", ml: 2, color: "text.secondary" }}
              >
                ${product.originalPrice}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>Color</Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {product?.color?.map((color) => (
                <ColorSwatch
                  key={color.name}
                  selected={selectedColor === color.name}
                  onClick={() => setSelectedColor(color.name)}
                  sx={{ backgroundColor: color.value }}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </Box>
          </Box>


          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>Size</Typography>
            <Select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              displayEmpty
              fullWidth
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Select Size</MenuItem>
               {product?.size?.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1">Quantity:</Typography>
            <IconButton
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              size="small"
            >
              <FiMinus />
            </IconButton>
            <Typography sx={{ mx: 2 }}>{quantity}</Typography>
            <IconButton
              onClick={() => setQuantity(quantity + 1)}
              size="small"
            >
              <FiPlus />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            color={product.stock > 0 ? "success.main" : "error.main"}
            sx={{ mb: 3 }}
          >
            {product.stock > 0 ? `${product.stock} items in stock` : "Out of stock"}
          </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<FaShoppingCart />}
                sx={{
                  bgcolor: "#e61835",
                  color: "white",
                  "&:hover": { bgcolor: "#c5132c" }
                }}
              >
                Agregar al Carrito
              </Button>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<FaCreditCard />}
                sx={{
                  borderColor: "#e61830",
                  color: "#e61830",
                  "&:hover": {
                    bgcolor: "#fff5f5",
                    borderColor: "#c5132c",
                    color: "#c5132c"
                  }
                }}
              >
                Comprar Ahora
              </Button>
            </Box>


          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent
              sx={{ cursor: "pointer" }}
              onClick={() => handleSectionToggle("material")}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="subtitle1">Detalles del Material</Typography>
                {expandedSection === "material" ? <MdExpandLess /> : <MdExpandMore />}
              </Box>
              <Collapse in={expandedSection === "material"}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Confeccionado con mezcla acrílica de alta calidad que garantiza durabilidad y comodidad.
                  Lavable a máquina. Producto importado.
                </Typography>
              </Collapse>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent
              sx={{ cursor: "pointer" }}
              onClick={() => handleSectionToggle("shipping")}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="subtitle1">Envíos y Devoluciones</Typography>
                {expandedSection === "shipping" ? <MdExpandLess /> : <MdExpandMore />}
              </Box>
              <Collapse in={expandedSection === "shipping"}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Envío gratuito en compras superiores a $100. Política de devolución de 30 días.
                  Consultá nuestra política de devoluciones para más información.
                </Typography>
              </Collapse>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;