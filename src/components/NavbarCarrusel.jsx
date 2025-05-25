import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavbarCarrusel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };


    const containerStyle = {
    backgroundColor: "#e61835",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9 rem",
    fontWeight: "bold",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const slideStyle = {
    textAlign: "center",
  };
  return (
    <div className="slider-container" style={containerStyle}>
      <Slider {...settings}>
        <div style={slideStyle}>
          <h3>✨ Nueva temporada Primavera/Verano 2025</h3>
        </div>
        <div style={slideStyle}>
          <h3>👗 Vestidos exclusivos para cada ocasión</h3>
        </div>
        <div style={slideStyle}>
          <h3>🔥 3 cuotas sin interés en toda la tienda</h3>
        </div>
        <div  style={slideStyle}>
          <h3>💃 Moda que inspira confianza</h3>
        </div>
        <div  style={slideStyle}>
          <h3>📦 Envíos gratis en compras mayores a $150.000</h3>
        </div >
        <div  style={slideStyle}>
          <h3>🌸 Estilo, comodidad y tendencia al alcance de un clic</h3>
        </div>
      </Slider>
    </div>
  );
}

export default NavbarCarrusel;
