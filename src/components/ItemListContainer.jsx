import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        if (idCategoria) {
          const filtrados = response.filter(
            (prod) =>
              prod.category.toLowerCase().replace(/\s+/g, '') ===
              idCategoria.toLowerCase()
          );
          setProducts(filtrados);
        } else {
          setProducts(response);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]); // en caso de error, dejar array vacío
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <Container maxWidth="xl" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>{greeting}</Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Buscando productos...
          </Typography>
        </Box>
      ) : products.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 5 }}>
          No se encontraron productos.
        </Typography>
      ) : (
        <div className="item-list">
          <ItemList products={products} />
        </div>
      )}
    </Container>
  );
};

export default ItemListContainer;
