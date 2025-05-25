const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1>{greeting}</h1>
      <div className="item-list">
        {/* Aquí se renderizarán los productos */}
      </div>
    </div>
  );
}   

export default ItemListContainer;
// El componente ItemListContainer recibe una propiedad greeting y la muestra en un encabezado h1.  