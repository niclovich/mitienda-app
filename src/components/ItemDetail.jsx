import React, { useState, useContext } from "react";
import { Box, Button, Container, Grid, Typography, Select, MenuItem, IconButton, Collapse, Card, CardContent, styled, ImageList, ImageListItem } from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useToast } from '../context/ToastContext';
import { Link } from "react-router-dom";
import ColorSwatch from "./shared/ColorSwatch";

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
  transition: "transform 0.3s ease-in-out",
  "&:hover": { transform: "scale(1.05)" }
});

// const ColorSwatch = styled(Button)(({ selected }) => ({
//   width: 40,
//   height: 40,
//   minWidth: "unset",
//   borderRadius: "50%",
//   margin: "0 8px",
//   border: selected ? "2px solid #000" : "1px solid #ddd"
// }));

const productImages = [
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
  "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8",
  "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91",
  "https://images.unsplash.com/photo-1583745095368-9914d429d124"
];

const ItemDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [purchase,setPurchase] = useState(false);
  const [expandedSection, setExpandedSection] = useState("material");
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [varianteSelect, setVarianteSelect] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();

  const colors = Array.from(new Map(product.variantes.map(v => [v.color.name, v.color])).values());


  const availableSizes = product.variantes
    .filter(v => !selectedColor || v.color.name === selectedColor)
    .map(v => v.talle)
    .filter((value, index, self) => self.indexOf(value) === index);

  //cambio de color y reinicio de talle
  const onChangeColor = (color) => {
    setSelectedColor(color.name);
    setSelectedSize("");
    setVarianteSelect(null);  // Reseteamos variante al cambiar color
  };

  //seleccion de talle y variante
    const selectVariante = (talle) => {
      setSelectedSize(talle);
      const varianteEncontrada = product.variantes.find(
        v => v.color.name === selectedColor && v.talle === talle
      );
      setVarianteSelect(varianteEncontrada || null);  // Guardamos variante o null
    };

  const handleAddToCart = () => {
        // Lógica de agregar al carrito...
        showToast('Producto agregado al carrito', 'success');
  };
  const onAdd = () => {
    setPurchase(true);

    console.log("Cantidad seleccionada:", quantity);

    const productSelect = {
      id_producto: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      id_variante: varianteSelect.id_variante,
      talle: varianteSelect.talle,
      color: varianteSelect.color,
    };

    console.log("productSelect", productSelect);
    handleAddToCart();

    addToCart(productSelect, quantity);
  };

  const handleSectionToggle = (section) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        
        {/* Imagen */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", overflow: "hidden", mb: 2 }}>
            <ProductImage src={mainImage} alt={product.nombre} loading="lazy" sx={{ height: 500, objectFit: "cover" }} />
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
                <img src={img} alt={`Vista ${index + 1}`} loading="lazy" style={{ height: 100, objectFit: "cover" }} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        {/* Datalle */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {product.marca}
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.descripcion}
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h5" component="span">
              ${product.precio}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>

            {/* Color */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="subtitle1" gutterBottom>Color</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {colors.map(color => (
                  <ColorSwatch
                    key={color.name}
                    selected={selectedColor === color.name}
                    onClick={() => onChangeColor(color)}
                    sx={{ backgroundColor: color.value }}
                    aria-label={`Seleccionar color ${color.name}`}
                  />

                ))}
              </Box>
            </Box>

            {/* Talle */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="subtitle1" gutterBottom>Talle</Typography>
              <Select
                value={selectedSize}
                onChange={(e) => selectVariante(e.target.value)}
                displayEmpty
                fullWidth
                sx={{ mt: 1 }}
              >
                <MenuItem value="">Seleccioná un talle</MenuItem>
                {availableSizes.map(size => (
                  <MenuItem key={size} value={size}>{size}</MenuItem>
                ))}
              </Select>
            </Box>

          </Box>

{/* 
          <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1">Cantidad:</Typography>
            <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} size="small">
              <FiMinus />
            </IconButton>
            <Typography sx={{ mx: 2 }}>{quantity}</Typography>
            <IconButton onClick={() => setQuantity(quantity + 1)} size="small">
              <FiPlus />
            </IconButton>
          </Box> */}
          {purchase ? (

            <Button
              variant="contained"
              fullWidth
              startIcon={<FaShoppingCart />}
              component={Link}
              to="/cart"
              sx={{
                borderRadius: 2,
                backgroundColor: "#333",
                "&:hover": { backgroundColor: "#444" },
                flex: 1
              }}
            >
              Ir al carrito
            </Button>

          ) : (

              varianteSelect?.stock > 0 && (
                  <ItemCount 
                      stock={varianteSelect.stock} 
                      onAdd={onAdd} 
                  />
              )

          )}







          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent sx={{ cursor: "pointer" }} onClick={() => handleSectionToggle("material")}>
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
            <CardContent sx={{ cursor: "pointer" }} onClick={() => handleSectionToggle("shipping")}>
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
