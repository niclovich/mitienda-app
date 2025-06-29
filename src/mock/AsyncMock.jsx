const products = [
  {
    id: "1",
    nombre: "Vestido de Verano Floral",
    descripcion: "Vestido largo con estampado floral y escote en V, perfecto para días cálidos.",
    categoria: "Vestidos",
    marca: "Chic Style",
    precio: 59.99,
    material: "Poliéster",
    imagen: "https://picsum.photos/200?random=1",
    variantes: [
      { id_variante: 1, talle: "S", color: { name: "Multicolor", value: "#FF69B4" }, stock: 7 },
      { id_variante: 2, talle: "M", color: { name: "Multicolor", value: "#FF69B4" }, stock: 7 },
      { id_variante: 3, talle: "L", color: { name: "Multicolor", value: "#FF69B4" }, stock: 6 }
    ]
  },
  {
    id: "2",
    nombre: "Blusa de Encaje Blanca",
    descripcion: "Blusa elegante con detalles de encaje en las mangas y cuello redondo.",
    categoria: "Blusas",
    marca: "Femme Line",
    precio: 39.99,
    material: "Algodón y encaje",
    imagen: "https://picsum.photos/200?random=2",
    variantes: [
      { id_variante: 4, talle: "S", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 5, talle: "M", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 6, talle: "L", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 7, talle: "XL", color: { name: "Blanco", value: "#FFFFFF" }, stock: 3 }
    ]
  },
  {
    id: "3",
    nombre: "Jeans Ajustados Azul Oscuro",
    descripcion: "Jeans de tiro alto, cómodos y versátiles.",
    categoria: "Pantalones",
    marca: "Denim Pro",
    precio: 49.99,
    material: "Denim elástico",
    imagen: "https://picsum.photos/200?random=3",
    variantes: [
      { id_variante: 8, talle: "36", color: { name: "Azul Oscuro", value: "#00008B" }, stock: 6 },
      { id_variante: 9, talle: "38", color: { name: "Azul Oscuro", value: "#00008B" }, stock: 6 },
      { id_variante: 10, talle: "40", color: { name: "Azul Oscuro", value: "#00008B" }, stock: 6 },
      { id_variante: 11, talle: "42", color: { name: "Azul Oscuro", value: "#00008B" }, stock: 7 }
    ]
  },
   {
    id: "4",
    nombre: "Campera de Cuero Sintético Negra",
    descripcion: "Campera entallada de cuero sintético con cierre frontal y bolsillos laterales.",
    categoria: "Camperas",
    marca: "Urban Style",
    precio: 89.99,
    material: "Cuero sintético",
    imagen: "https://picsum.photos/200?random=4",
    variantes: [
      { id_variante: 12, talle: "S", color: { name: "Negro", value: "#000000" }, stock: 4 },
      { id_variante: 13, talle: "M", color: { name: "Negro", value: "#000000" }, stock: 3 },
      { id_variante: 14, talle: "L", color: { name: "Negro", value: "#000000" }, stock: 3 }
    ]
  },
  {
    id: "5",
    nombre: "Falda Plisada Rosa Suave",
    descripcion: "Falda midi con pliegues y cintura elástica para un look romántico.",
    categoria: "Faldas",
    marca: "Luna Rose",
    precio: 44.99,
    material: "Chifón",
    imagen: "https://picsum.photos/200?random=5",
    variantes: [
      { id_variante: 15, talle: "S", color: { name: "Rosa Suave", value: "#F8C8DC" }, stock: 6 },
      { id_variante: 16, talle: "M", color: { name: "Rosa Suave", value: "#F8C8DC" }, stock: 6 },
      { id_variante: 17, talle: "L", color: { name: "Rosa Suave", value: "#F8C8DC" }, stock: 6 }
    ]
  },
  {
    id: "6",
    nombre: "Remera Rayada Casual",
    descripcion: "Remera de algodón de manga corta con diseño de rayas moderno.",
    categoria: "Remeras",
    marca: "Everyday Wear",
    precio: 24.99,
    material: "100% Algodón",
    imagen: "https://picsum.photos/200?random=6",
    variantes: [
      { id_variante: 18, talle: "S", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 19, talle: "M", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 20, talle: "L", color: { name: "Blanco", value: "#FFFFFF" }, stock: 4 },
      { id_variante: 21, talle: "XL", color: { name: "Blanco", value: "#FFFFFF" }, stock: 3 },
      { id_variante: 22, talle: "S", color: { name: "Azul Marino", value: "#000080" }, stock: 4 },
      { id_variante: 23, talle: "M", color: { name: "Azul Marino", value: "#000080" }, stock: 4 },
      { id_variante: 24, talle: "L", color: { name: "Azul Marino", value: "#000080" }, stock: 4 },
      { id_variante: 25, talle: "XL", color: { name: "Azul Marino", value: "#000080" }, stock: 3 }
    ]
  }
];

let error = false;
// Simula un error en la promesa
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // o lo que uses como condición real de error
      if (error) {
        reject(new Error('Error al obtener los productos'));
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 2000);
  });
}
