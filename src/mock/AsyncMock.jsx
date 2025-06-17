const products = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    description: 'Long dress with floral print and V-neck, perfect for warm days.',
    category: 'Dresses',
    brand: 'Chic Style',
    price: 59.99,
    stock: 20,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Multicolor', value: '#FF69B4' }], // ejemplo: hot pink
    material: 'Polyester',
    image: 'https://picsum.photos/200?random=1'
  },
  {
    id: '2',
    name: 'White Lace Blouse',
    description: 'Elegant blouse with lace details on sleeves and round neck.',
    category: 'Blouses',
    brand: 'Femme Line',
    price: 39.99,
    stock: 15,
    size: ['S', 'M', 'L', 'XL'],
    color: [{ name: 'White', value: '#FFFFFF' }],
    material: 'Cotton and lace',
    image: 'https://picsum.photos/200?random=2'
  },
  {
    id: '3',
    name: 'Dark Blue Skinny Jeans',
    description: 'High-rise skinny jeans, comfortable and versatile.',
    category: 'Pants',
    brand: 'Denim Pro',
    price: 49.99,
    stock: 25,
    size: ['36', '38', '40', '42'],
    color: [{ name: 'Dark Blue', value: '#00008B' }],
    material: 'Stretch denim',
    image: 'https://picsum.photos/200?random=3'
  },
  {
    id: '4',
    name: 'Black Faux Leather Jacket',
    description: 'Fitted faux leather jacket with front zipper and side pockets.',
    category: 'Jackets',
    brand: 'Urban Style',
    price: 89.99,
    stock: 10,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Black', value: '#000000' }],
    material: 'Faux leather',
    image: 'https://picsum.photos/200?random=4'
  },
  {
    id: '5',
    name: 'Pleated Skirt in Soft Pink',
    description: 'Midi skirt with pleats and elastic waistband for a romantic look.',
    category: 'Skirts',
    brand: 'Luna Rose',
    price: 44.99,
    stock: 18,
    size: ['S', 'M', 'L'],
    color: [{ name: 'Soft Pink', value: '#F8C8DC' }],
    material: 'Chiffon',
    image: 'https://picsum.photos/200?random=5'
  },
  {
    id: '6',
    name: 'Casual Striped T-Shirt',
    description: 'Short-sleeve cotton T-shirt with modern stripe design.',
    category: 'T-Shirts',
    brand: 'Everyday Wear',
    price: 24.99,
    stock: 30,
    size: ['S', 'M', 'L', 'XL'],
    color: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy Blue', value: '#000080' }
    ],
    material: '100% Cotton',
    image: 'https://picsum.photos/200?random=6'
  },
  {
    id: '7',
    name: 'High-Waisted Leggings',
    description: 'Comfortable and supportive leggings for daily wear or workout.',
    category: 'Leggings',
    brand: 'FitLine',
    price: 29.99,
    stock: 22,
    size: ['XS', 'S', 'M', 'L'],
    color: [
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#808080' }
    ],
    material: 'Spandex and polyester',
    image: 'https://picsum.photos/200?random=7'
  },
  {
    id: '8',
    name: 'Knitted Cardigan',
    description: 'Soft knit cardigan with buttons and front pockets.',
    category: 'Cardigans',
    brand: 'Cozy Knit',
    price: 54.99,
    stock: 12,
    size: ['S', 'M', 'L'],
    color: [
      { name: 'Beige', value: '#F5F5DC' },
      { name: 'Cream', value: '#FFFDD0' }
    ],
    material: 'Acrylic blend',
    image: 'https://picsum.photos/200?random=8'
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
