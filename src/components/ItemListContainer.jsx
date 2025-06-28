import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import LoaderComponent from "./LoaderComponent";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase"; // Asegúrate de que la ruta sea correcta
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  //PRODUCTOS MOCKEADOS
  // useEffect(() => {
  //   setLoading(true);

  //   getProducts()
  //     .then((response) => {
  //       if (idCategoria) {
  //         const filtrados = response.filter(
  //           (prod) =>
  //             prod.category.toLowerCase().replace(/\s+/g, '') ===
  //             idCategoria.toLowerCase()
  //         );
  //         setProducts(filtrados);
  //       } else {
  //         setProducts(response);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setProducts([]); // en caso de error, dejar array vacío
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [idCategoria]);

  //PRODUCTOS DESDE FIREBASE
  useEffect(() => {
    setLoading(true);
    console.log("idCategoria:", idCategoria);

    const productsCollection = idCategoria
        ? query(collection(db, "products"), where("category", "==", idCategoria))
        : collection(db, "products");

    console.log("productsCollection:", productsCollection.docs);

    getDocs(productsCollection)
      .then((snapshot) => {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsList);
      })
      .catch((error) => {
        console.error("Error fetching products from Firestore:", error);
        setProducts([]); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);


  return (
    <Container maxWidth="xl" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>{greeting}</Typography>

      {loading ? (
      <LoaderComponent message="Buscando productos..." />
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
