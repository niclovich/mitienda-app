import {useState} from 'react' // Importa la biblioteca React


const Contador = () => {
    const [count, setcount] = useState(1); // Inicializa el estado del contador en 0 
    //variable de estado contador y la función setContador para actualizarlo
    //useState es un hook que permite agregar estado a los componentes funcionales

    const sumar = () => {
        setcount(count + 1); // Incrementa el contador en 1
    }
    const restar = () => {
        setcount(count - 1); // Decrementa el contador en 1
    }
    return (
        <div >
            <button onClick={sumar}>+</button>
            <span>{count}</span>
            <button onClick={restar}>-</button>
        </div>
    );
}
export default Contador;