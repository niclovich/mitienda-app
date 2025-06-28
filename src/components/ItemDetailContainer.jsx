import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import LoaderComponent from "./LoaderComponent";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // PRODUCTOS DESDE FIREBASE
  useEffect(() => {
    if (!id) return; // Validación por si id es undefined
    setLoading(true);

    const productCollection = collection(db, "products");
    const docRef = doc(productCollection, id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct(res.data());
          console.log("Producto encontrado:", res.data());
        } else {
          console.log("El producto no existe");
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Error al obtener producto:", error);
        setProduct(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

    return (
      <>
        {loading ? (
          <LoaderComponent message="Buscando producto..." />
        ) : !product ? (
          <Typography variant="h6" align="center" sx={{ mt: 5 }}>
            No se encontró el producto solicitado.
          </Typography>
        ) : (
          <ItemDetail product={product} />
        )}
      </>
    );

};

export default ItemDetailContainer;
