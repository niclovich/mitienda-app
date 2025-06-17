import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const [comprar, setComprar] = useState(false);

    const sumar = () => {
        if (count < stock) {
            // Verifica que no exceda el stock
            setCount(count + 1);

        }
    }
    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const comprarProducto = () => {
        setComprar(!comprar);   
    };

    //no se recomienda usar useEffect sin un array de dependencias, ya que se ejecutará en cada renderizado
    useEffect(() => {
        // Aquí podrías agregar lógica adicional si es necesario
        console.log(`Sin el array de dependencias, este efecto se ejecutará en cada renderizado.`);
    });

    // Con un array de dependencias vacío, el efecto se ejecutará solo una vez al montar el componente
    useEffect(() => {
        console.log(`Con el array de dependencias, este efecto se ejecutará una sola vez al montar el componente.`);

    }, []);

    // Con un array de dependencias que incluye 'count', el efecto se ejecutará cada vez que 'count' cambie
    useEffect(() => {
        console.log(`Con el array de dependencias [comprar], este efecto se ejecutará cada vez que 'count' cambie: ${comprar}`);

    }, [comprar]);
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={3}>
        <Typography variant="h6">Cantidad</Typography>
        <Box display="flex" alignItems="center" gap={2}>
            <Button variant="outlined" color="secondary" onClick={restar}>-</Button>
            <Typography variant="h5">{count}</Typography>
            <Button variant="outlined" color="secondary" onClick={sumar}>+</Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
            Stock disponible: {stock}
        </Typography>
        <Button variant="contained" color="primary" onClick={comprarProducto}  disabled={stock === 0}>
            Comprar
        </Button>
    
 

        {comprar && (
            <Typography variant="body1" color="success.main">
            ¡Compra realizada con éxito!
            </Typography>
        )}
        </Box>
    );
};

export default ItemCount;
