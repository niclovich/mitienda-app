const products = [
  {
    id: '1',
    name: 'Vestido de Verano Floral',
    description: 'Vestido largo con estampado floral y escote en V, perfecto para días cálidos.',
    category: 'Vestidos',
    brand: 'Chic Style',
    price: 59.99,
    stock: 20,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Multicolor', value: '#FF69B4' }],
    material: 'Poliéster',
    image: 'https://picsum.photos/200?random=1'
  },
  {
    id: '2',
    name: 'Blusa de Encaje Blanca',
    description: 'Blusa elegante con detalles de encaje en las mangas y cuello redondo.',
    category: 'Blusas',
    brand: 'Femme Line',
    price: 39.99,
    stock: 15,
    size: ['S', 'M', 'L', 'XL'],
    color: [{ name: 'Blanco', value: '#FFFFFF' }],
    material: 'Algodón y encaje',
    image: 'https://picsum.photos/200?random=2'
  },
  {
    id: '3',
    name: 'Jeans Ajustados Azul Oscuro',
    description: 'Jeans de tiro alto, cómodos y versátiles.',
    category: 'Pantalones',
    brand: 'Denim Pro',
    price: 49.99,
    stock: 25,
    size: ['36', '38', '40', '42'],
    color: [{ name: 'Azul Oscuro', value: '#00008B' }],
    material: 'Denim elástico',
    image: 'https://picsum.photos/200?random=3'
  },
  {
    id: '4',
    name: 'Campera de Cuero Sintético Negra',
    description: 'Campera entallada de cuero sintético con cierre frontal y bolsillos laterales.',
    category: 'Camperas',
    brand: 'Urban Style',
    price: 89.99,
    stock: 10,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Negro', value: '#000000' }],
    material: 'Cuero sintético',
    image: 'https://picsum.photos/200?random=4'
  },
  {
    id: '5',
    name: 'Falda Plisada Rosa Suave',
    description: 'Falda midi con pliegues y cintura elástica para un look romántico.',
    category: 'Faldas',
    brand: 'Luna Rose',
    price: 44.99,
    stock: 18,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Rosa Suave', value: '#F8C8DC' }],
    material: 'Chifón',
    image: 'https://picsum.photos/200?random=5'
  },
  {
    id: '6',
    name: 'Remera Rayada Casual',
    description: 'Remera de algodón de manga corta con diseño de rayas moderno.',
    category: 'Remeras',
    brand: 'Everyday Wear',
    price: 24.99,
    stock: 30,
    size: ['S', 'M', 'L', 'XL'],
    color: [
      { name: 'Blanco', value: '#FFFFFF' },
      { name: 'Azul Marino', value: '#000080' }
    ],
    material: '100% Algodón',
    image: 'https://picsum.photos/200?random=6'
  },
  {
    id: '7',
    name: 'Calzas Tiro Alto',
    description: 'Calzas cómodas y ajustadas para uso diario o ejercicio.',
    category: 'Calzas',
    brand: 'FitLine',
    price: 29.99,
    stock: 22,
    size: ['XS', 'S', 'M', 'L'],
    color: [
      { name: 'Negro', value: '#000000' },
      { name: 'Gris', value: '#808080' }
    ],
    material: 'Spandex y poliéster',
    image: 'https://picsum.photos/200?random=7'
  },
  {
    id: '8',
    name: 'Cárdigan Tejido',
    description: 'Cárdigan suave con botones y bolsillos delanteros.',
    category: 'Cárdigans',
    brand: 'Cozy Knit',
    price: 54.99,
    stock: 12,
    size: ['S', 'M', 'L'],
    color: [
      { name: 'Beige', value: '#F5F5DC' },
      { name: 'Crema', value: '#FFFDD0' }
    ],
    material: 'Mezcla acrílica',
    image: 'https://picsum.photos/200?random=8'
  },
  {
    id: '9',
    name: 'Vestido Midi Floral',
    description: 'Vestido midi con estampado floral y tirantes finos. Ideal para primavera.',
    category: 'Vestidos',
    brand: 'Flora Chic',
    price: 64.99,
    stock: 14,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Azul Floral', value: '#87CEEB' }],
    material: 'Viscosa',
    image: 'https://picsum.photos/200?random=9'
  },
  {
    id: '10',
    name: 'Blusa Satinada',
    description: 'Blusa sin mangas de satén, perfecta para looks elegantes o de oficina.',
    category: 'Blusas',
    brand: 'Eleganza',
    price: 34.99,
    stock: 20,
    size: ['S', 'M', 'L', 'XL'],
    color: [{ name: 'Champagne', value: '#F7E7CE' }],
    material: 'Satén',
    image: 'https://picsum.photos/200?random=10'
  },
  {
    id: '11',
    name: 'Pantalón Palazzo',
    description: 'Pantalón amplio y fluido con cintura alta. Ideal para verano.',
    category: 'Pantalones',
    brand: 'Urban Flow',
    price: 52.99,
    stock: 18,
    size: ['36', '38', '40'],
    color: [{ name: 'Beige', value: '#F5F5DC' }],
    material: 'Lino',
    image: 'https://picsum.photos/200?random=11'
  },
  {
    id: '12',
    name: 'Campera de Jean',
    description: 'Campera clásica de jean con botones metálicos y bolsillos delanteros.',
    category: 'Camperas',
    brand: 'Denim Co.',
    price: 74.99,
    stock: 12,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Celeste', value: '#ADD8E6' }],
    material: 'Denim',
    image: 'https://picsum.photos/200?random=12'
  },
  {
    id: '13',
    name: 'Falda Acampanada',
    description: 'Falda corta con corte acampanado, ideal para un estilo juvenil.',
    category: 'Faldas',
    brand: 'Trendy Wear',
    price: 29.99,
    stock: 16,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Rojo', value: '#FF0000' }],
    material: 'Algodón',
    image: 'https://picsum.photos/200?random=13'
  },
  {
    id: '14',
    name: 'Remera Oversize',
    description: 'Remera de corte holgado con estampado frontal artístico.',
    category: 'Remeras',
    brand: 'Street Pulse',
    price: 27.99,
    stock: 25,
    size: ['M', 'L', 'XL'],
    color: [{ name: 'Negro', value: '#000000' }],
    material: 'Algodón',
    image: 'https://picsum.photos/200?random=14'
  },
  {
    id: '15',
    name: 'Calzas Deportivas',
    description: 'Calzas de compresión con cintura alta. Ideal para entrenamiento.',
    category: 'Calzas',
    brand: 'FitZone',
    price: 31.99,
    stock: 30,
    size: ['XS', 'S', 'M', 'L'],
    color: [{ name: 'Violeta', value: '#800080' }],
    material: 'Poliéster y elastano',
    image: 'https://picsum.photos/200?random=15'
  },
  {
    id: '16',
    name: 'Cárdigan Largo de Punto',
    description: 'Cárdigan largo y liviano con textura de punto abierto.',
    category: 'Cárdigans',
    brand: 'Soft Knit',
    price: 58.99,
    stock: 10,
    size: ['M', 'L'],
    color: [{ name: 'Gris Claro', value: '#D3D3D3' }],
    material: 'Acrílico',
    image: 'https://picsum.photos/200?random=16'
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
