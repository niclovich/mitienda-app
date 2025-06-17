import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";
import { Typography, CircularProgress, Box } from "@mui/material";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Buscando producto...
        </Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 5 }}>
        No se encontró el producto solicitado.
      </Typography>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
