import React from 'react';
import { Box, CircularProgress, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Animación suave tipo fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Contenedor estilizado
const LoaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  animation: `${fadeIn} 0.6s ease-in-out`,
}));

// Card flotante con sombras suaves
const LoaderCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(3),
  backgroundColor: '#ffffffcc',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  backdropFilter: 'blur(4px)',
}));

const LoaderComponent = ({ message = "Cargando..." }) => {
  return (
    <LoaderWrapper>
      <LoaderCard elevation={0}>
        <CircularProgress size={30} thickness={5} color="primary" />
        <Typography variant="subtitle1" sx={{ fontWeight: 400, color: 'text.secondary' }}>
          {message}
        </Typography>
      </LoaderCard>
    </LoaderWrapper>
  );
};

export default LoaderComponent;
