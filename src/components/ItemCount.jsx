import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Grid } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import Toast from './shared/Toast'; // Asegurate de importar correctamente

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);


    const sumar = () => {
        if (count < stock) setCount(count + 1);
    };

    const restar = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        onAdd(count);
    };

    return (
        <>
            <Grid container spacing={2} sx={{ m: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="space-between"
                    border="1px solid #c4c4c4" 
                    borderRadius={1} 
                    px={1} 
                    py={0.5}
                    height="40px"
                    width="100%"
                >
                    <IconButton size="small" onClick={restar}>-</IconButton>
                    <Typography variant="body1">{count}</Typography>
                    <IconButton size="small" onClick={sumar}>+</IconButton>
                </Box>

                <Button 
                    variant="contained"
                    startIcon={<FaShoppingCart />}
                    onClick={handleAdd}
                    sx={{
                        bgcolor: "#a61919",
                        color: "white",
                        "&:hover": { bgcolor: "#8b1616" },
                        width: "100%",
                        height: "40px"
                    }}
                >
                    Agregar al carrito
                </Button>
            </Grid>

        </>
    );
};

export default ItemCount;
