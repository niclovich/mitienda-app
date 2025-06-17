import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { Container } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams(); 

  useEffect(() => {
    getProducts()
      .then((response) => {

        if (idCategoria) {
          // Filtrar productos por categoría
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
      });
  }, [idCategoria]);

  return (
    <Container maxWidth="xl" style={{ marginTop: "20px" }}>
      <h1>{greeting}</h1>
      <div className="item-list">
        <ItemList products={products} />
      </div>
    </Container>
  );
};

export default ItemListContainer;
