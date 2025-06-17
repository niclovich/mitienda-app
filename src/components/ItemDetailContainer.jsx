import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getProductById } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductById(id)
            .then((response) => {
                setProduct(response);
                console.log("Producto obtenido:", response);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    },[]);
    // useEffect(() => {
    //      getProducts()
    //           .then((response) => {
    //             setProducts(response);
    //             console.log("Productos obtenidos:", response);
    //           })
    //           .catch((error) => {
    //             console.error("Error fetching products:", error);
    //           });
    // },[]);
    return (
        <ItemDetail product={product}/>
    );
    }
export default ItemDetailContainer;