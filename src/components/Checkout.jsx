import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderId, setOrderId] = useState('');

    const finalizarCompra = (dataForm) => {
        console.log("Datos del formulario:", dataForm);
        // Simulación de generación de orden:
        setOrderId('ABC123');
    };

    return (
        <>
            <div>
                <h1>Checkout</h1>
                <p>Implementación del proceso de pago aquí.</p>
            </div>

            <form onSubmit={handleSubmit(finalizarCompra)}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ingrese su nombre" 
                    {...register('name', { required: true, minLength: 3 })} 
                />

                {errors.name?.type === 'required' && (
                    <span>El nombre es requerido.</span>
                )}

                {errors.name?.type === 'minLength' && (
                    <span>El nombre debe tener al menos 3 caracteres.</span>
                )}

                <button type="submit">Enviar</button>
            </form>

            {orderId && (
                <div>
                    <h3>Gracias por su compra</h3>
                    <p>Su código de orden es: {orderId}</p>
                </div>
            )}
        </>
    );
};

export default Checkout;
