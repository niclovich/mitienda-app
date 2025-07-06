import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts,productos } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { Container, Typography, CircularProgress, Box ,Button} from "@mui/material";
import { styled } from "@mui/system";
import LoaderComponent from "./shared/LoaderComponent";

import { collection, getDocs, query, where ,addDoc} from "firebase/firestore";
import { db } from "../service/firebase"; // Asegúrate de que la ruta sea correcta

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  //PRODUCTOS MOCKEADOS
  //  useEffect(() => {
  //    setLoading(true);

  //    getProducts()
  //      .then((response) => {

  //        if (idCategoria) {
  //          const filtrados = response.filter(
  //          (prod) =>
  //              prod.categoria.toLowerCase().replace(/\s+/g, '') ===
  //              idCategoria.toLowerCase()
  //          );
  //          setProducts(filtrados);
  //        } else {
  //          setProducts(response);
  //        }
  //      })
  //      .catch((error) => {
  //       console.error("Error fetching products:", error);
  //      setProducts([]); // en caso de error, dejar array vacío
  //    })
  //    .finally(() => {
  //       setLoading(false);
  //     });
  //  }, [idCategoria]);

    // const subirData = async () => {
    //   console.log("click!");

    //   const collectionAgregar = collection(db, "products");

    //   try {
    //     for (const prod of productos) {
    //       const docRef = await addDoc(collectionAgregar, prod);
    //       console.log(`Producto ${prod.nombre} agregado con ID: ${docRef.id}`);
    //     }
    //     console.log("Todos los productos fueron cargados correctamente.");
    //   } catch (error) {
    //     console.error("Error al cargar productos:", error);
    //   }
    // };


  //PRODUCTOS DESDE FIREBASE

  
  useEffect(() => {
    setLoading(true);
    console.log("idCategoria:", idCategoria);

    const productsCollection = idCategoria
        ? query(collection(db, "products"), where("category", "==", idCategoria))
        : collection(db, "products");


    getDocs(productsCollection)
      .then((snapshot) => {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Products fetched from Firestore:", productsList);

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
    <>
    {/* <Button onClick={subirData}> Subir productos</Button> */}
        <Container maxWidth="xl" style={{ marginTop: "20px" }}>
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
    </>

  );
};

export default ItemListContainer;
