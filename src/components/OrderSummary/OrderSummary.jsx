import { Box, Typography, Divider, TextField, Button, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const OrderSummary = ({ cart, subtotal, total,context }) => {
    //   const [codigoPostal, setCodigoPostal] = useState("");
    //   const [envioCalculado, setEnvioCalculado] = useState(false);



    return (
        
<Paper sx={{ p: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: '100%' }} elevation={3}>
            <Typography variant="h6" gutterBottom>RESUMEN DE COMPRA</Typography>


            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">
                    Cantidad de productos:
                </Typography>
                <Typography variant="body2">
                    {cart.length}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">
                    Subtotal:
                </Typography>
                <Typography variant="body2">
                    ${subtotal.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
                </Typography>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="body2">Envío:</Typography>
                <Typography variant="body2">Gratis</Typography>
            </Box>


            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    ${total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
                </Typography>
            </Box>
            {context === "cart" && (
               
                <Button
                     variant="contained"
                        fullWidth
                        size="large"
                        sx={{ bgcolor: "#8B0000", "&:hover": { bgcolor: "#700000" }, py: 1.5, fontWeight: "bold" }}
                        startIcon={<ShoppingCartIcon />}
                    component={Link}
                    to="/checkout"
                >
                    Iniciar pago
                </Button>
            )}


        </Paper>
    );
};

export default OrderSummary;
