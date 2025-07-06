import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import OrderSummary from "../OrderSummary/OrderSummary";

const CheckoutEcommerce = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { cart, getTotal,confirmPurchase } = useContext(CartContext);
  const total = getTotal();

  const finalizarCompra = (data) => {
    confirmPurchase();
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        
        {/* Formulario */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, mb: 3 }} elevation={3}>
            <Typography variant="h6" gutterBottom>DATOS DE CONTACTO</Typography>
            
            <TextField
              label="E-mail"
              fullWidth
              margin="normal"
              {...register("email", {
                required: "El e-mail es obligatorio",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "El formato del e-mail no es correcto",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <FormControlLabel control={<Checkbox defaultChecked />} label="Quiero recibir ofertas y novedades por e-mail" />
          </Paper>

          <Paper sx={{ p: 4, mb: 3 }} elevation={3}>
            <Typography variant="h6" gutterBottom>DATOS DEL DESTINATARIO</Typography>

            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 30, message: "Máximo 30 caracteres" },
              })}
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />

            <TextField
              label="Apellido"
              fullWidth
              margin="normal"
              {...register("apellido", {
                required: "El apellido es requerido",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 30, message: "Máximo 30 caracteres" },
              })}
              error={!!errors.apellido}
              helperText={errors.apellido?.message}
            />

            <TextField
              label="Teléfono"
              fullWidth
              margin="normal"
              {...register("telefono", {
                required: "El teléfono es requerido",
                minLength: { value: 7, message: "Mínimo 7 dígitos" },
                maxLength: { value: 15, message: "Máximo 15 dígitos" },
              })}
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
            />

            <TextField
              label="Calle"
              fullWidth
              margin="normal"
              {...register("calle", {
                required: "La calle es requerida",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
              })}
              error={!!errors.calle}
              helperText={errors.calle?.message}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Número"
                  fullWidth
                  {...register("numero", {
                    required: "El número es requerido",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Debe ser un valor numérico",
                    },
                  })}
                  error={!!errors.numero}
                  helperText={errors.numero?.message}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Departamento (opcional)"
                  fullWidth
                  {...register("departamento")}
                />
              </Grid>
            </Grid>

            <TextField
              label="Barrio"
              fullWidth
              margin="normal"
              {...register("barrio", {
                required: "El barrio es requerido",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
              })}
              error={!!errors.barrio}
              helperText={errors.barrio?.message}
            />

            <TextField
              label="Ciudad"
              fullWidth
              margin="normal"
              {...register("ciudad", {
                required: "La ciudad es requerida",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
              })}
              error={!!errors.ciudad}
              helperText={errors.ciudad?.message}
            />
          </Paper>


          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ bgcolor: "#8B0000", "&:hover": { bgcolor: "#700000" }, py: 1.5, fontWeight: "bold" }}
            startIcon={<ShoppingCartIcon />}
            onClick={handleSubmit(finalizarCompra)}
            disabled={cart.length === 0}
          >
            Continuar para el pago
          </Button>
        </Grid>

        {/* Resumen de compra */}
        <Grid item xs={12} md={4}>
          <OrderSummary
            cart={cart}
            total={total}
            subtotal={total}
            sx={{ width: "100%" }}
          />
        </Grid>

      </Grid>
    </Container>
  );
};

export default CheckoutEcommerce;
