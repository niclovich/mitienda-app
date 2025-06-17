import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { Container } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        //console.log("Productos obtenidos:", response);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
