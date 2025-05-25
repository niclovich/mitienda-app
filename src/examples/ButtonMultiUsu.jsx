
import React from 'react' // Importa la biblioteca React
//declara componente
const ButtonMultiUsu = ({texto, estilos, funcion} ) => {

    console.log(props) // Imprime las propiedades del componente en la consola
    return (
        <button style={estilos} onClick={funcion}>{texto}</button>
    
    )
}
export default ButtonMultiUsu // Exporta el componente ButtonMultiUsu para que pueda ser utilizado en otros archivos