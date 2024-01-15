const products = [
  {
    id: 1,
    name: "Orochimaru 大蛇丸",
    price: 300,
    category: "Characters",
    img: "../src/assets/imagenes/orochimaru.jpg",
    stock: 5,
    description: "Original Painting A3 Size",
  },
  {
    id: 2,
    name: "Kintaro to Koi 金太郎と鯉",
    price: 450,
    category: "Characters",
    img: "../src/assets/imagenes/kintaro_koi.jpg",
    stock: 2,
    description: "Original Painting A3 Size",
  },
  {
    id: 3,
    name: "Tsunade 綱手",
    price: 300,
    category: "Characters",
    img: "../src/assets/imagenes/sunade.jpg",
    stock: 5,
    description: "Original Painting A3 Size",
  },
  {
    id: 4,
    name: "Kiyohime 清姫",
    price: 380,
    category: "Characters",
    img: "../src/assets/imagenes/mascara_pelos.jpg",
    stock: 3,
    description: "Original Painting A3 Size",
  },
  {
    id: 5,
    name: "Danshichi Kurobei 団七九郎兵衛",
    price: 500,
    category: "Characters",
    img: "../src/assets/imagenes/samurai_agua.jpg",
    stock: 1,
    description: "Original Painting A3 Size",
  },
  {
    id: 6,
    name: "Dakki no Ohyaku 妲己のお百",
    price: 380,
    category: "Characters",
    img: "../src/assets/imagenes/calavera.jpg",
    stock: 3,
    description: "Original Painting A3 Size",
  },
  {
    id: 7,
    name: "Hou-oo 鳳凰",
    price: 350,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/fenix.jpg",
    stock: 4,
    description: "Original Painting A3 Size",
  },
  {
    id: 8,
    name: "Kiku 菊",
    price: 200,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/crisantemos.jpg",
    stock: 5,
    description: "Original Painting A3 Size",
  },
  {
    id: 9,
    name: "Unryu 雲龍",
    price: 280,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/dragon.jpg",
    stock: 5,
    description: "Original Painting A3 Size",
  },
  {
    id: 10,
    name: "Karajishi 唐獅子",
    price: 230,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/karajishi.jpg",
    stock: 2,
    description: "Original Painting A3 Size",
  },
  {
    id: 11,
    name: "Kitsune 狐",
    price: 250,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/Kitsune.jpg",
    stock: 3,
    description: "Original Painting A3 Size",
  },
  {
    id: 12,
    name: "Kasha 火車",
    price: 190,
    category: "Nature and Mythological Animals",
    img: "../src/assets/imagenes/gato.jpg",
    stock: 5,
    description: "Original Painting A3 Size",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == productId));
    }, 500);
  });
};
