import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Lista de Productos
      </Typography>

      <Grid container spacing={3} columns={12}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid
              item
              xs={12}
              sx={{ gridColumn: { sm: 'span 6', md: 'span 3' } }}
              key={product.id}
            >
              <Item product={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No hay productos disponibles.</Typography>
          </Grid>
        )}
      </Grid>


    </>
  );
};

export default ItemList;
